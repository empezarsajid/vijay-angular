using System.Threading.Tasks;
using AngularJs.Entity.Classes;
using AngularJs.Repository;
using Microsoft.AspNetCore.Mvc;

namespace AngularJs.Services
{
    public class UserService
    {
        IUserRepository UserRepository;
        vijayContext Context;
        public UserService(IUserRepository userRepository, vijayContext context)
        {
            UserRepository = userRepository;
            Context = context;
        }


    }
}