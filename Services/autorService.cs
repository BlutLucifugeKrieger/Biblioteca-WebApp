using BibliotecaAPP.Data;
using BibliotecaAPP.Interfaces;
using BibliotecaAPP.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

namespace BibliotecaAPP.Services
{
    public class autorService : autorInterface
    {
        private readonly BibliotecaAPPContext _context;


        public autorService(BibliotecaAPPContext context)
        {
            _context = context;
        }

        public async Task<string> creacionDeAutor(autoresModel autor)
        {
            
            bool autorExistente = await _context.autoresModel.AnyAsync(a => a.Nombre == autor.Nombre);

            if (!autorExistente)
            {
                
                _context.autoresModel.Add(autor);
                await _context.SaveChangesAsync();

                return $"Autor -> {autor.Nombre} fue agregado satisfactoriamente con el id {autor.AutorId}";
            }
            else
            {
                return $"El autor con el nombre -> {autor.Nombre}, ya existe en la base de datos, por favor, ingresa uno distinto.";
            }
        }

        public  async Task<List<autoresModel>> todosLosAutores()
        {
            var result = await _context.autoresModel.ToListAsync();

            return result;
        }
    }
}
