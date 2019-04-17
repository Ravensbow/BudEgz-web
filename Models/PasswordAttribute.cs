using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Projekt1.Data;
using Microsoft.EntityFrameworkCore;
using Projekt1.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Projekt1.Models;

namespace Projekt1.Models
{
    public class PasswordAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string password = (string)value;

            int wynik=0;
            if(!string.IsNullOrEmpty(password))
            {
            if(password.Any(char.IsDigit))
            {
                wynik++;
            }
            if(password.Any(char.IsUpper))
            {
                wynik++;
            }            
            if(password.Any(char.IsLower))
            {
                wynik++;
            }
            if(password.Any(char.IsSymbol))
            {
                wynik++;
            }
            if(wynik==4)
                return ValidationResult.Success;
            else
                return new ValidationResult(GetErrorMessage());
            }
            else
                return new ValidationResult(GetErrorMessage());
        }
        public string GetErrorMessage()
        {
            return "Hasło powinno zawierać znak spelcjalny, małą litere, wielką litere oraz liczbe";
        }

    }
}