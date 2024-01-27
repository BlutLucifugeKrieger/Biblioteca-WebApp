using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BibliotecaAPP.Data;
using BibliotecaAPP.Models;
using BibliotecaAPP.Services;
using System.Security.Cryptography.Xml;

namespace BibliotecaAPP.Controllers
{
    [Route("api/libros")]
    [ApiController]
    public class librosController : ControllerBase
    {
        private readonly BibliotecaAPPContext _context;

        public librosController(BibliotecaAPPContext context)
        {
            _context = context;
        }

        [HttpPost("nuevoLibro")]
        public async Task<IActionResult> nuevoLibro(librosModel libro)
        {
            try
            {
                libroService service = new libroService(_context);
                var result = await service.añadirLibro(libro);
                return Ok(new { resultado = result });
            }
            catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.Message);
                return BadRequest(new {repuesta = "Error al añadir un nuevo libro a la coleccion"});
            }
        }

        [HttpGet]
        public async Task<List<librosModel>> todosLosLibros()
        {
            try
            {

                libroService service = new libroService(_context);
                var result = await service.obtenerTodosLosLibros();
                return result;

            }catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.Message);
                return new List<librosModel>();
            }
        }

        [HttpGet("autoresYLibros")]
        public async Task<IActionResult> AutoresYLibros()
        {
            try
            {
                libroService service = new libroService(_context);
                var result = await service.librosYAutores();
                return Ok(new {resultado = result});

            }catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.Message);
                return BadRequest(new {resultado = "Error en la obtencion de los libros junto a sus autores"});
            }
        }

    }
        
}
