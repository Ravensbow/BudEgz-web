
using System.ComponentModel.DataAnnotations;

namespace Projekt1.Models
{
    public class LoginView
    {
        public string Login { get; set; }
        public string Haslo { get; set; }
        [Display(Name="Zapamiętać?")]
        public bool Zapamietac { get; set; }
    }
}