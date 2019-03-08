


using System.ComponentModel.DataAnnotations;

namespace Projekt1.Models
{
    class Egzamin
    {
        public string Kategoria { get; set; }
        public int TimePytanie { get; set; }
        [Display(Name="Wyświetlanie poprawności odpowiedzi po zaznaczeniu")]
        public bool ShowAnswer { get; set; }
        public int LiczbaPytan { get; set; }
    }
}