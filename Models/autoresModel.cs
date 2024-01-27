
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BibliotecaAPP.Models
{
    [Table("Autores")]
    public class autoresModel
    {
        [Key]
        public int AutorId { get; set; }
        public string Nombre { get; set; }

    }

}
