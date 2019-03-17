
using System.ComponentModel.DataAnnotations;

namespace Projekt1.Models
{
    public class LoginView
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        [Display(Name="Zapamiętać?")]
        public bool RememberMe { get; set; }
    }
}