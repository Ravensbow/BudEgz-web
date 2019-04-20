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
    public class CategoryController : Controller
    {
        private readonly IBazaRepository repository;

        public CategoryController(IBazaRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("[action]")]
        public IActionResult GetAllCategoryName()
        {
            try{
                return Ok(repository.GetAllCategoryName());
            }
            catch(Exception ex){
                return BadRequest($"Failed to load Categories: {ex}");
            }
        }
        [HttpGet("[action]/{id:int}")]
        public IActionResult GetCategoryById(int id)
        {
            try{
                var cat= repository.GetCategoryById(id);
                if(cat!=null) return Ok(cat);
                else return NotFound();
            }
            catch(Exception ex){
                return BadRequest($"Failed to load category({id}): {ex}");
            }
        }



    }
}