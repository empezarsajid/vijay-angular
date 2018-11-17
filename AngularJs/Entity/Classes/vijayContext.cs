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

        public virtual DbSet<EmailRangeGroup> EmailRangeGroup { get; set; }
        public virtual DbSet<EnblockUsers> EnblockUsers { get; set; }
        public virtual DbSet<EnblockUsersHistory> EnblockUsersHistory { get; set; }
        public virtual DbSet<UserInRole> UserInRole { get; set; }
        public virtual DbSet<UserRoles> UserRoles { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=35.200.239.24;port=3306;user=vijay;password=vijay@123;database=vijay");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmailRangeGroup>(entity =>
            {
                entity.HasKey(e => e.GroupId);

                entity.Property(e => e.GroupId).HasColumnType("int(11)");

                entity.Property(e => e.CreatedBy).HasColumnType("bigint(20)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).HasColumnType("varchar(256)");

                entity.Property(e => e.IsDeleted).HasColumnType("bit(1)");

                entity.Property(e => e.MaxRange).HasColumnType("int(11)");

                entity.Property(e => e.MinRange).HasColumnType("int(11)");

                entity.Property(e => e.ModifiedBy).HasColumnType("bigint(20)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name).HasColumnType("varchar(64)");
            });

            modelBuilder.Entity<EnblockUsers>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId).HasColumnType("bigint(20)");

                entity.Property(e => e.Client).HasColumnType("varchar(256)");

                entity.Property(e => e.CreatedBy).HasColumnType("bigint(20)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DayLimit).HasColumnType("int(11)");

                entity.Property(e => e.EmptyApproved)
                    .HasColumnName("Empty_Approved")
                    .HasColumnType("int(11)");

                entity.Property(e => e.EmptyHold)
                    .HasColumnName("Empty_Hold")
                    .HasColumnType("int(11)");

                entity.Property(e => e.EmptyLimit)
                    .HasColumnName("Empty_Limit")
                    .HasColumnType("int(11)");

                entity.Property(e => e.GroupId).HasColumnType("int(11)");

                entity.Property(e => e.IsDeleted).HasColumnType("bit(1)");

                entity.Property(e => e.LoadedApproved)
                    .HasColumnName("Loaded_Approved")
                    .HasColumnType("int(11)");

                entity.Property(e => e.LoadedHold)
                    .HasColumnName("Loaded_Hold")
                    .HasColumnType("int(11)");

                entity.Property(e => e.LoadedLimit)
                    .HasColumnName("Loaded_Limit")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModifiedBy).HasColumnType("bigint(20)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .HasColumnType("varchar(256)");
            });

            modelBuilder.Entity<EnblockUsersHistory>(entity =>
            {
                entity.ToTable("EnblockUsers_History");

                entity.Property(e => e.Id).HasColumnType("bigint(20)");

                entity.Property(e => e.Client).HasColumnType("varchar(256)");

                entity.Property(e => e.CreatedBy).HasColumnType("bigint(20)");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DayLimit).HasColumnType("int(11)");

                entity.Property(e => e.EmptyApproved)
                    .HasColumnName("Empty_Approved")
                    .HasColumnType("int(11)");

                entity.Property(e => e.EmptyHold)
                    .HasColumnName("Empty_Hold")
                    .HasColumnType("int(11)");

                entity.Property(e => e.EmptyLimit)
                    .HasColumnName("Empty_Limit")
                    .HasColumnType("int(11)");

                entity.Property(e => e.GroupId).HasColumnType("int(11)");

                entity.Property(e => e.IsDeleted).HasColumnType("bit(1)");

                entity.Property(e => e.LoadedApproved)
                    .HasColumnName("Loaded_Approved")
                    .HasColumnType("int(11)");

                entity.Property(e => e.LoadedHold)
                    .HasColumnName("Loaded_Hold")
                    .HasColumnType("int(11)");

                entity.Property(e => e.LoadedLimit)
                    .HasColumnName("Loaded_Limit")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModifiedBy).HasColumnType("bigint(20)");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.UserEmail)
                    .IsRequired()
                    .HasColumnType("varchar(256)");

                entity.Property(e => e.UserId).HasColumnType("bigint(20)");
            });

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
