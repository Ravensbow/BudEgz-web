using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Projekt1.Data.Entities;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System;

namespace Projekt1.Data
{
    public class BazaSeeder
    {
        private readonly BazaContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public BazaSeeder(BazaContext ctx, IHostingEnvironment hosting, UserManager<StoreUser> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _ctx.Database.EnsureCreated();

            StoreUser user = await _userManager.FindByEmailAsync("walkoskuba@gmail.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Patryk",
                    LastName = "Walkowiak",
                    Email = "adresemail@gmail.com",
                    UserName = "adresemail@gmail.com"
                };

                var result = await _userManager.CreateAsync(user, "Haslo.123");
                if (result != IdentityResult.Success)
                    throw new InvalidOperationException("Could not create new user in seeder!");
            }

            if (!_ctx.Questions.Any())
            {
                //Przykladowa zawartosc
                var path = Path.Combine(_hosting.ContentRootPath, "Data/quest.json");
                var json = File.ReadAllText(path);
                var questions = JsonConvert.DeserializeObject<IEnumerable<Question>>(json);
                _ctx.Questions.AddRange(questions);

                _ctx.SaveChanges();
            }
        }
    }
}
