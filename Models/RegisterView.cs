using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Projekt1.Models
{
    public class RegisterView
    {
        [EmailAddress]
        [Required]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string firstName { get; set; }
    }
}