using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Projekt1.Data.Entities;

namespace Projekt1.Data
{
    public class BazaContext : IdentityDbContext<StoreUser>
    {
        public BazaContext(DbContextOptions<BazaContext> options) : base(options)
        {
            
        }
        public DbSet<Question> Questions{get;set;}
        public DbSet<Category> Categorys{get;set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<Question>().HasData()
        }
    }
}