using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Behavior.Models.FirebaseViewModels;
using Firebase.Database;
using Firebase.Database.Query;
using Behavior.Models;
using System.Collections;

namespace Behavior.Controllers
{
    public class FirebaseController : Controller
    {
        public IActionResult Index()
        {
            var model = new IndexViewModel();

            return View(model);
        }

        public IActionResult AddStudent()
        {
            AddStudentViewModel model = new AddStudentViewModel();
   
            return View("AddStudent", model);
        }


    }
}