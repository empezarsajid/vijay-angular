using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularJs.Entity.Classes;
using System.Net;
using System.Net.Http;
using System.Web;
using AngularJs.DTO;
using AngularJs.Repository;

using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using AngularJs.Helpers;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;

namespace AngularJs.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserInRoleRepository _userInRoleRepository;
        private readonly vijayContext _context;
        private readonly AppSettings _appSettings;

        public UsersController(IUserRepository userRepository, IUserInRoleRepository userInRoleRepository,
         vijayContext context, IOptions<AppSettings> appSettings)
        {
            _userRepository = userRepository;
            _userInRoleRepository = userInRoleRepository;
            _context = context;
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        [Route("getall")]
        public IEnumerable<UsersDTO> GetAll()
        {
            var userLoginModel = (
                from user in _context.Users
                join role in _context.UserInRole
                on user.Id equals role.UserId
                where role.RoleId != 1  // Exclude admin user
                && user.IsDeleted == false   // Exclude deleted user
                select new UsersDTO()
                {
                    Name = user.Name,
                    CreatedDate = user.CreatedDate,
                    UserName = user.UserName,
                    Email = user.Email,
                    Id = user.Id,
                    RoleId = role.RoleId,
                    Phone = user.Phone,
                    IsApproved = user.IsApproved
                }).ToList();

            return userLoginModel;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("AddUser")]
        public Users AddUser(int userRole, [FromBody]Users user)
        {
            // Add the user to users table.
            user.CreatedDate = DateTime.Now;
            user.IsDeleted = false;
            user.IsApproved = false;
            user = _userRepository.Add(user);
            // Add the user role to UserInRole table.
            _userInRoleRepository.Add(new UserInRole { UserId = user.Id, RoleId = userRole });
            return user;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("CheckIfExists")]
        public bool CheckIfExists([FromBody]Users user)
        {
            // Check if user with username and email already exists.
            return _userRepository.IsExists(m => m.UserName == user.UserName || m.Email == user.Email);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("UserLogin")]
        public UsersDTO UserLogin([FromBody]Users userModel)
        {
            var userLoginModel = (
                from user in _context.Users
                join role in _context.UserInRole
                on user.Id equals role.UserId
                where user.UserName == userModel.UserName && user.Password == userModel.Password
                && user.IsApproved == true && user.IsDeleted == false
                select new
                {
                    Name = user.Name,
                    Id = user.Id,
                    RoleId = role.RoleId
                }).FirstOrDefault();

            if (userLoginModel != null)
            {

                // authentication successful so generate jwt token
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, userLoginModel.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);

                return new UsersDTO
                {
                    Name = userLoginModel.Name,
                    Id = userLoginModel.Id,
                    RoleId = userLoginModel.RoleId,
                    Token = tokenHandler.WriteToken(token)
                };
            }
            else
            {
                return null;
            }
        }

        [HttpPost]
        [Route("UpdateUser")]
        public Users UpdateUser([FromBody]Users user)
        {
            var entity = _userRepository.Find(user.Id);
            if (entity != null)
            {
                entity.ModifiedDate = DateTime.Now;
                entity.IsApproved = user.IsApproved;
                return _userRepository.Update(entity);
            }
            return null;
        }
    }
}