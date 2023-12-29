using jobintech.Data;
using jobintech.Models;
using jobintech.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace jobintech.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class studentController : ControllerBase
    {
        private readonly JITDBContext _db;
        public studentController(JITDBContext dbcon)
        {
            _db = dbcon;
        }

        [HttpPost]
        public void postStudent([FromBody] Students student)
        {
            _db.studentset.Add(student);
            _db.SaveChanges();
        }

        [HttpGet]
        public IActionResult GetStudents()
        {
            var students = _db.studentset.ToList();
            return Ok(students);
        }

        [HttpDelete]
        public void deleteAll()
        {
            var students = _db.studentset.ToList();
            _db.studentset.RemoveRange(students);
            _db.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void deleteone(int id)
        {
            var studentToDelete = _db.studentset.Find(id);
            _db.studentset.Remove(studentToDelete);
            _db.SaveChanges();
        }

        [HttpPut("{id}")]
        public void updateeone(int id,[FromBody] Students updatedStudent)
        {
            Console.WriteLine(updatedStudent.StudentName);
            var existingStudent = _db.studentset.Find(id);
            existingStudent.StudentName = updatedStudent.StudentName;
            existingStudent.number = updatedStudent.number;
            existingStudent.email = updatedStudent.email;
            existingStudent.Speciality = updatedStudent.Speciality;
            _db.SaveChanges();
        }

        [HttpPost("/absence")]
        public void addAbsence([FromBody]Absence absense)
        {

        }
    }
}
