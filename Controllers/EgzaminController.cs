using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Projekt1.Models;
using Projekt1.Data;
using Microsoft.EntityFrameworkCore; 


namespace Projekt1.Controllers
{
    public class EgzaminController : Controller
    {
        private readonly BazaContext _context;
        public EgzaminController(BazaContext context)
        {
            _context = context;

        }
        public IActionResult Index()
        {
            ViewBag.ListaPytan= _context.Categorys.Distinct().ToList().Select(z=>z.Name).ToList();
            //ViewBag.ListaPytan = new List<string>() { "Mosty", "Beton", "Asfalt", "Fundamentalizm", "Ziemniaki" };
            return View();
        }
        [HttpPost]
        public IActionResult Index(EgzaminModel Em)
        {
            return RedirectToActionPermanent("Test", "Egzamin", new { em = Em });

        }
        public IActionResult Test(EgzaminModel em)
        {
            var results = _context.Questions.Include(a => a.Answers).ToList();
            List<Pytanie> listaPytan = new List<Pytanie>() { new Pytanie(), new Pytanie(), new Pytanie(), new Pytanie(), new Pytanie() };
            return View(results);
        }
    }
}