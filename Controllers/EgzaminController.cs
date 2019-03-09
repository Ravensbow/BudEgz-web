using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Projekt1.Models;


namespace Projekt1.Controllers
{
    public class EgzaminController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.ListaPytan = new List<string>(){"Mosty","Beton","Asfalt","Fundamentalizm","Ziemniaki"};
            return View();
        }
        [HttpPost]
        public string Index( EgzaminModel em)
        {
            return em.LiczbaPytan.ToString();
        }
        public string Test(EgzaminModel em)
        {
            return em.LiczbaPytan.ToString();
        }
    }
}