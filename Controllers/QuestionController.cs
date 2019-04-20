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
    [ApiController]
    [Produces("application/json")]
    public class QuestionController : Controller
    {
        
        private readonly IBazaRepository repository;
        public QuestionController(IBazaRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet("[action]")]
        public IActionResult GetAllQuestion()
        {
            try{
                return Ok(repository.GetAllQuestion());
            }
            catch(Exception ex){
                return BadRequest($"Failed to get questions: {ex}");
            }
            
        }
        
        [HttpGet("[action]/{id:int}")]
        public IActionResult GetQuestionById(int id)
        {
            try{
                 var que= repository.GetQuestionById(id);
                if(que!=null) return Ok(que);
                else return NotFound();
            }
            catch(Exception ex){
                return BadRequest($"Failed to load question({id}): {ex}");
            }
        }
        [HttpGet("[action]/{category}")]
        public IActionResult GetAllQuestionFromCategory(string category)
        {
            try{
                 var que= repository.GetAllQuestionFromCategory(category);
                if(que!=null) return Ok(que);
                else return NotFound();
            }
            catch(Exception ex){
                return BadRequest($"Failed to load question({category}): {ex}");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Question model)
        {
            try
            {
                repository.AddEntity(model);
                if(repository.SaveAll())
                {
                    return Created($"/api/ApiQuestion/{model.Id}",model);
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex);   
            }
            return BadRequest($"Failed to save new question");
        }
    }
}