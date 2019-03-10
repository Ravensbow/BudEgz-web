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
        public void Index( EgzaminModel Em)
        {
            RedirectToAction("Test",new {em=Em });

        }
        public IActionResult Test(EgzaminModel em)
        {
            List<Pytanie> listaPytan =new List<Pytanie>(){new Pytanie(),new Pytanie(),new Pytanie(),new Pytanie(), new Pytanie()}; 
            return View(listaPytan);
        }
    }
}