using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace jobintech.Models
{
    public class Absence
    {
        [Key]
        public int? Id { get; set; }
        public int Studentsid { get; set; }
        public DateTime date  { get; set; }
        public bool justified { get; set; }
    }
}
