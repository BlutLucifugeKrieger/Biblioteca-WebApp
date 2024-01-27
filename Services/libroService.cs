using BibliotecaAPP.Data;
using BibliotecaAPP.Interfaces;
using BibliotecaAPP.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace BibliotecaAPP.Services
{
    public class libroService : libroInterface
    {

        private readonly BibliotecaAPPContext _context;

        public libroService(BibliotecaAPPContext context)
        {
            _context = context;
        }

        public async Task<string> añadirLibro(librosModel libro)
        {

            bool libroExistence = await _context.librosModel.AnyAsync(a => a.Titulo == libro.Titulo && a.AutorId == libro.AutorId);

            if (!libroExistence)
            {
                _context.librosModel.Add(libro);
                await _context.SaveChangesAsync();
                return $"El libro -> {libro.Titulo} se añadio correctamente.";

            }
            else
            {
                return $"El libro -> {libro.Titulo}, ya existe en la base de datos, por favor, ingresa un libro distinto.";
            }

            
        }

        public async Task<List<object>> librosYAutores()
        {
            var resultado = await (
                from libro in _context.librosModel
                join autor in _context.autoresModel on libro.AutorId equals autor.AutorId
                where autor.AutorId > 0
                select new { Titulo = libro.Titulo, Autor = autor.Nombre }
            ).ToListAsync();

            return resultado.Cast<object>().ToList();
        }

        public async Task<List<librosModel>> obtenerTodosLosLibros()
        {
            var result = await _context.librosModel.ToListAsync();
            return result;
        }
    }
}
