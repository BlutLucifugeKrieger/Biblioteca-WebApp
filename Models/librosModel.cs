using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BibliotecaAPP.Models
{

    [Table("Libros")]
    public class librosModel
    {
        [Key]
        public int Id { get; set; }
        public string Titulo { get; set; }

        public int AutorId { get; set; }


    }
}
