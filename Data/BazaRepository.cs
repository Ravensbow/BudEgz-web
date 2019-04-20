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

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public IEnumerable<Category> GetAllCategory()
        {
            return ctx.Categorys.ToList();
        }

        public IEnumerable<string> GetAllCategoryName()
        {
            return ctx.Categorys.ToList().Select(c => c.Name).Distinct().ToList();
        }

        public IEnumerable<Question> GetAllQuestion()
        {
            return ctx.Questions
                .Include(q => q.Answers)
                .Include(q => q.Categorys)
                .OrderBy(p => p.Content)
                .ToList();

        }
        public IEnumerable<Question> GetAllQuestionFromCategory(string category)
        {
            return ctx.Questions
                .Where(q => q.Categorys
                    .Select(c => c.Name)
                    .Contains(category)).Include(p => p.Answers).Include(p=>p.Categorys);
        }
        public IEnumerable<Question> GetRandomQuestionFromCategory(string category, int ilosc)
        {
            //var a = from q in ctx.Questions orderby SqlFunctions.rAND
            return ctx.Questions
                .Where(q => q.Categorys
                    .Select(c => c.Name)
                    .Contains(category));
        }

        public Category GetCategoryById(int id)
        {
            return ctx.Categorys.Find(id);
        }

        public Question GetQuestionById(int id)
        {
            return ctx.Questions.Include(a => a.Answers).Include(c => c.Categorys).Where(a => a.Id == id).FirstOrDefault();
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}