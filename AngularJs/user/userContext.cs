using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularJs.user
{
    public partial class userContext : DbContext
    {
        public userContext()
        {
        }

        public userContext(DbContextOptions<userContext> options)
            : base(options)
        {
        }

        // Unable to generate entity type for table 'tblUsers'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=35.239.152.184;port=3306;user=root;password=vijay@123;database=user");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
    }
}
