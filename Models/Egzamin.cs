using System.ComponentModel.DataAnnotations;

namespace Projekt1.Models
{
    public class EgzaminModel
    {
        public string Kategoria { get; set; }
        [Display(Name="Czas na egzaminie")]
        public int TimePytanie { get; set; }
        [Display(Name="Natychmiastowa odpowiedz")]
        public bool ShowAnswer { get; set; }
        [Display(Name="Liczba pytan w egzaminie")]
        public int LiczbaPytan { get; set; }
    }
}