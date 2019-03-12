using Microsoft.EntityFrameworkCore;
using Projekt1.Data.Entities;

namespace Projekt1.Views.Data
{
    public class BazaContext : DbContext
    {
        public DbSet<Product> Products{get;set;}
        public DbSet<Order> Orders { get; set; }
    }
}