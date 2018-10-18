using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.EntityFrameworkCore;
using AngularJs.Entity.Classes;

namespace AngularJs.Repository.GenericRepository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        DbSet<T> _dbset;
        private vijayContext _dbcontext = new vijayContext();

        public Repository()
        {
            _dbset = _dbcontext.Set<T>();
        }

        public virtual T Add(T entity)
        {
            _dbset.Add(entity);
            _dbcontext.SaveChanges();
            return entity;
        }

        public virtual T Update(T entity)
        {
            if (entity != null)
            {
                _dbset.Attach(entity);
                _dbcontext.Entry(entity).State = EntityState.Modified;
                _dbcontext.SaveChanges();
                return entity;
            }
            else
            {
                return null;
            }
        }
        public virtual bool Delete(T entity)
        {
            if (entity != null)
            {
                _dbset.Remove(entity);
                _dbcontext.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public virtual bool IsExists(Expression<Func<T, bool>> match)
        {
            return _dbset.Count(match) > 0;
        }

        public virtual T Find(int id)
        {
            return _dbset.Find(id);
        }

        public virtual IEnumerable<T> GetList(Expression<Func<T, bool>> match)
        {
            return _dbset.Where(match);
        }

        public virtual int GetCount(Expression<Func<T, bool>> match)
        {
            return _dbset.Count(match);
        }

        public IEnumerable<T> GetAll()
        {
            return _dbset.ToList();
        }

        // public void SaveChanges()
        // {
        //     _dbcontext.SaveChanges();
        // }
    }
}