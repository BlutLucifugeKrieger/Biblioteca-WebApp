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

namespace BibliotecaAPP.Controllers
{
    [Route("api/autores")]
    [ApiController]
    public class autoresController : ControllerBase
    {
        private readonly BibliotecaAPPContext _context;

        public autoresController(BibliotecaAPPContext context)
        {
            _context = context;
        }

        [HttpPost("nuevoAutor")]
        public async Task<IActionResult> nuevoAutor(autoresModel autor)
        {
            try
            {
                autorService service = new autorService(_context);
                var result = await service.creacionDeAutor(autor);
                return Ok(new { respuesta = result });

            }catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.Message);
                return BadRequest( new { respuesta = "Fallo en la creacion de un nuevo autor" });
            }
        }

        [HttpGet]
        public async Task<List<autoresModel>> obtenerLosAutores()
        {
            try
            {

                autorService service = new autorService(_context);
                var result = await service.todosLosAutores();
                return result;

            }catch (Exception ex)
            {
                await Console.Out.WriteLineAsync(ex.Message);
                return new List<autoresModel>();
            }
        }
    }
}
