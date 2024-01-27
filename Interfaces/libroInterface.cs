using BibliotecaAPP.Models;

namespace BibliotecaAPP.Interfaces
{
    public interface libroInterface
    {
        public Task<string> añadirLibro(librosModel libro);
        public Task<List<librosModel>> obtenerTodosLosLibros();

        public Task<List<object>> librosYAutores();
    }
}
