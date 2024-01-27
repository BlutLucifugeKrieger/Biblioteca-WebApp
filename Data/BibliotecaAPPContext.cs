using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BibliotecaAPP.Models;

namespace BibliotecaAPP.Data
{
    public class BibliotecaAPPContext : DbContext
    {
        public BibliotecaAPPContext (DbContextOptions<BibliotecaAPPContext> options)
            : base(options)
        {
        }

        public DbSet<BibliotecaAPP.Models.autoresModel> autoresModel { get; set; } = default!;

        public DbSet<BibliotecaAPP.Models.librosModel>? librosModel { get; set; }
    }
}
