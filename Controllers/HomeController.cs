using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Projekt1.Models;

namespace Projekt1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public string Login(LoginView lv)
        {
           return lv.Login;
        }
        public IActionResult Privacy()
        {
            User user = new User(){Id=1,Nick="TwojStary",Password="pijany"};
            return View(user);
        }

        [HttpPost]
        public IActionResult Privacy(User user)
        {
            System.Diagnostics.Debug.WriteLine(user.Id);
            
            return View(user);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
