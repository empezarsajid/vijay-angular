using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularJs.Entity.Classes
{
    public partial class vijayContext : DbContext
    {
        public vijayContext()
        {
        }

        public vijayContext(DbContextOptions<vijayContext> options)
            : base(options)
        {
        }

        public virtual DbSet<UserInRole> UserInRole { get; set; }
        public virtual DbSet<UserRoles> UserRoles { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=35.239.152.184;port=3306;user=root;password=vijay@123;database=vijay");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserInRole>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.RoleId).HasColumnType("int(11)");

                entity.Property(e => e.UserId).HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<UserRoles>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasColumnType("varchar(250)");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.IsApproved).HasColumnType("bit(1)");

                entity.Property(e => e.IsDeleted).HasColumnType("bit(1)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnType("varchar(250)");

                entity.Property(e => e.Phone).HasColumnType("varchar(45)");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasColumnType("varchar(250)");
            });
        }
    }
}
