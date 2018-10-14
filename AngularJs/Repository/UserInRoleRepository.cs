using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.EntityFrameworkCore;
using AngularJs.Entity.Classes;
using AngularJs.Repository.GenericRepository;

namespace AngularJs.Repository
{
    public class UserInRoleRepository : Repository<UserInRole>, IUserInRoleRepository
    {
    }
}
