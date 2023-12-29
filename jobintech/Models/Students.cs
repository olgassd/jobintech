using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace jobintech.Models
{
    public class Students
    {
        [Key]
        public int? StudentId { get; set; }
        public string StudentName { get; set; }
        public string number { get; set; }
        public string email { get; set; }
        public string Speciality { get; set; }
        
    }
}
