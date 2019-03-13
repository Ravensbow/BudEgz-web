using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Projekt1.Data.Entities;
using System.Collections;
using System.Collections.Generic;

namespace Projekt1.Data
{
    public class BazaSeeder
    {
        private readonly BazaContext _ctx;
        private readonly IHostingEnvironment _hosting;

        public BazaSeeder(BazaContext ctx, IHostingEnvironment hosting )
        {
            _ctx = ctx;
            _hosting = hosting;
        }

        public void Seed()
        {
            _ctx.Database.EnsureCreated();
            if(!_ctx.Questions.Any())
            {
                //Przykladowa zawartosc
                var path = Path.Combine(_hosting.ContentRootPath,"Data/quest.json");
                var json= File.ReadAllText(path);
                var questions = JsonConvert.DeserializeObject<IEnumerable<Question>>(json);
                _ctx.Questions.AddRange(questions);

                _ctx.SaveChanges();
            }
        }
    }
}