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

namespace Projekt1.Controllers
{
    [Route("api/[Controller]")]
    public class ApiCategoryController : Controller
    {
        private readonly IBazaRepository repository;

        public ApiCategoryController(IBazaRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try{
                return Ok(repository.GetAllCategory());
            }
            catch(Exception ex){
                return BadRequest($"Failed to load Categories: {ex}");
            }
        }


    }
}