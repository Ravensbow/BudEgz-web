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
        [Required(ErrorMessage="Email jest wymagany!")]
        public string email { get; set; }
        [Required(ErrorMessage="Hasło jest wymagane!")]
        [Password]
        public string password { get; set; }
        [Required(ErrorMessage="Imię jest wymagane!")]
        public string lastName { get; set; }
        [Required(ErrorMessage="Nazwisko jest wymagane!")]
        public string firstName { get; set; }
    }
}