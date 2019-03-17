using System.Collections.Generic;
using Projekt1.Data.Entities;
namespace Projekt1.Data
{
    public interface IBazaRepository
    {
        IEnumerable<Question> GetAllQuestion();
        IEnumerable<Question> GetAllQuestionFromCategory(string category);
        Question GetQuestionById(int id);
          
        IEnumerable<Category> GetAllCategory();
        IEnumerable<string> GetAllCategoryName();
        Category GetCategoryById(int id);

        bool SaveAll();
        void AddEntity(object model);
    }
}