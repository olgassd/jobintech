using Microsoft.EntityFrameworkCore;
using jobintech.Models;

namespace jobintech.Data
{
    public class JITDBContext : DbContext
    {
        public DbSet<Students> studentset {get;set;}
        public DbSet<Absence> absencet { get;set;}
        public JITDBContext(DbContextOptions<JITDBContext> options):base(options)
        {
            
        }
    }
}
