using System.Collections.Generic;
using Projekt1.Data.Entities;
namespace Projekt1.Data
{
    public interface IBazaRepository
    {
          IEnumerable<Question> GetAllQuestion();
          IEnumerable<Question> GetAllQuestionFromCategory(string category);
          IEnumerable<Category> GetAllCategory();
          IEnumerable<string> GetAllCategoryName();

          bool SaveAll();
          
    }
}