using CRUD.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD.Context
{
    public class DefaultContext : DbContext
    {
        public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
        {
        }

        public DbSet<PaymentDetail> PaymentDetail { get; set; }

    }
}
