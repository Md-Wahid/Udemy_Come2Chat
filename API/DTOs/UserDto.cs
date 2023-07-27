using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UserDto
    {
        [Required]
        [StringLength(15, MinimumLength =3, ErrorMessage ="Name must be atleast {2} and maximum {1} chracters")]
        public string Name { get; set; }
    }
}