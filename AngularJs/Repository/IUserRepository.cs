using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AngularJs.Entity.Classes;
using Microsoft.AspNetCore.Mvc;

namespace AngularJs.Repository
{
    public interface IUserRepository
    {
        Users Add(Users user);
        bool IsExists(Expression<Func<Users, bool>> match);
        Users Update(Users user);

        Users Find(int id);
    }
}