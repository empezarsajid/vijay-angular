using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularJs.Entity.Classes;
using System.Net;
using System.Net.Http;
using System.Web;
using AngularJs.Repository;

namespace AngularJs.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserInRoleRepository _userInRoleRepository;
        private readonly vijayContext _context;
        public UsersController(IUserRepository userRepository, IUserInRoleRepository userInRoleRepository,
        vijayContext context)
        {
            _userRepository = userRepository;
            _userInRoleRepository = userInRoleRepository;
            _context = context;
        }

        [HttpGet]
        [Route("getall")]
        public IEnumerable<UserLoginModel> GetAll()
        {
            var userLoginModel = (
                from user in _context.Users
                join role in _context.UserInRole
                on user.Id equals role.UserId
                where role.RoleId != 1  // Exclude admin user
                && user.IsDeleted == false   // Exclude deleted user
                select new UserLoginModel()
                {
                    Name = user.Name,
                    CreatedDate = user.CreatedDate,
                    UserName = user.UserName,
                    Email = user.Email,
                    Id = user.Id,
                    RoleId = role.RoleId,
                    Phone = user.Phone
                }).ToList();

            return userLoginModel;
        }

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

        [HttpPost]
        [Route("CheckIfExists")]
        public bool CheckIfExists([FromBody]Users user)
        {
            // Check if user with username and email already exists.
            return _userRepository.IsExists(m => m.UserName == user.UserName || m.Email == user.Email);
        }

        [HttpPost]
        [Route("UserLogin")]
        public UserLoginModel UserLogin([FromBody]Users userModel)
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
                return new UserLoginModel { Name = userLoginModel.Name, Id = userLoginModel.Id, RoleId = userLoginModel.RoleId };
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
            user.ModifiedDate = DateTime.Now;
            return _userRepository.Update(user);
        }
    }
}