using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Projekt1.Models;
using Projekt1.Data;
using Microsoft.EntityFrameworkCore; 
using Projekt1.Data.Entities;
using Microsoft.AspNetCore.Authorization;

namespace Projekt1.Controllers
{
    [Authorize]
    public class EgzaminController : Controller
    {       
        private readonly IBazaRepository repository;

        public EgzaminController(IBazaRepository repository)
        {
            this.repository = repository;
        }
        public IActionResult Index()
        {
            //ViewBag.ListaPytan= _context.Categorys.Distinct().ToList().Select(z=>z.Name).ToList();
            //ViewBag.ListaPytan = new List<string>() { "Mosty", "Beton", "Asfalt", "Fundamentalizm", "Ziemniaki" };
            ViewBag.ListaPytan=repository.GetAllCategoryName();
            return View(new EgzaminModel{TimePytanie=90,LiczbaPytan=20});
        }
        [HttpPost]
        public IActionResult Index(EgzaminModel Em)
        {
            return RedirectToActionPermanent("Test", "Egzamin", new { em = Em });

        }
        public IActionResult Test(EgzaminModel em)
        {
            var results = repository.GetAllQuestion();
            return View(results);
        }
    }
}