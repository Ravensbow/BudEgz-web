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
            return View();
        }
        public IActionResult Test()
        {
            return View();
        }
    }
}