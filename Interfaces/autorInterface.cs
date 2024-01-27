using BibliotecaAPP.Models;
using Microsoft.AspNetCore.Mvc;

namespace BibliotecaAPP.Interfaces
{
    public interface autorInterface
    {
        public Task<string> creacionDeAutor(autoresModel autor);
        public Task<List<autoresModel>> todosLosAutores();
    }
}
