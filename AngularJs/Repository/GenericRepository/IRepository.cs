using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AngularJs.Entity.Classes;

namespace AngularJs.Repository.GenericRepository
{
    public interface IRepository<T> where T : class
    {
        T Add(T entity);
        T Update(T entity);
        bool Delete(T entity);
        bool IsExists(Expression<Func<T, bool>> match);
        T Find(int id);
        IEnumerable<T> GetList(Expression<Func<T, bool>> match);
        int GetCount(Expression<Func<T, bool>> match);
        IEnumerable<T> GetAll();
    }
}