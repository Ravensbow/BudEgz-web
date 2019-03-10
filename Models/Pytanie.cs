using System.Collections.Generic;

namespace Projekt1.Models
{
    public class Pytanie
    {
        public int Id { get; set; }
        public string Tresc { get; set; }
        public virtual List<string> Kategorias { get; set; }
        public virtual List<string> Odpowiedzs {get;set;}
        public Pytanie(){
            Id=0;
            Tresc="Przykladowa tresc?";
            Kategorias = new List<string>(){"Kategoria1","Kategorai2","Kategoria3"};
            Odpowiedzs = new List<string>(){"Odpowiedz1","Odpowiedz2","Odpowiedz3"};            
        }
    }
    
}