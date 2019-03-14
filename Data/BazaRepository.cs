using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Projekt1.Data.Entities;
using System.Linq;
namespace Projekt1.Data
{
    public class BazaRepository : IBazaRepository
    {
        private readonly BazaContext ctx;

        public BazaRepository(BazaContext ctx)
        {
            this.ctx = ctx;
        }

        public IEnumerable<Category> GetAllCategory()
        {
            return ctx.Categorys.ToList();
        }

        public IEnumerable<string> GetAllCategoryName()
        {
            return ctx.Categorys.Distinct().ToList().Select(c => c.Name).ToList();
        }

        public IEnumerable<Question> GetAllQuestion()
        {
            return ctx.Questions
                .Include(q =>q.Answers)
                .OrderBy(p=>p.Content)
                .ToList();
            
        }
        public IEnumerable<Question> GetAllQuestionFromCategory(string category)
        {
            return ctx.Questions
                .Where(q => q.Categorys
                    .Select(c =>c.Name)
                    .Contains(category) );
            
            
        }
        public bool SaveAll()
        {
            return ctx.SaveChanges() >0;
        }
    }
}