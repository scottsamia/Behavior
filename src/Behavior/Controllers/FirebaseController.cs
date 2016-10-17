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
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Behavior.Controllers
{
    public class FirebaseController : Controller
    {
        private FirebaseConfig _FirebaseConfig { get; set; }
        public FirebaseController(IOptions<FirebaseConfig> settings)
        {
            _FirebaseConfig = settings.Value;
        }
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
        public IActionResult UpdateStudent(string id)
        {
            UpdateStudentViewModel model = new UpdateStudentViewModel();
            model.id = id;
            return View("UpdateStudent", model);
        }

        public IActionResult getFirebaseConfig()
        {
            var config = _FirebaseConfig;
            return Json(config);
        }


    }
}