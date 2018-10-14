using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJs.Entity.Classes;
using AngularJs.Repository.GenericRepository;

namespace AngularJs.Repository
{
    public class UserRepository : Repository<Users>, IUserRepository
    {
    }
}

