using AngularJs.Entity.Classes;
using Microsoft.AspNetCore.Mvc;

namespace AngularJs.Repository
{
    public interface IUserInRoleRepository
    {
        UserInRole Add(UserInRole userInRole);
    }
}