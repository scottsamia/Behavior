﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Behavior.Models.CounterViewModels;


namespace Behavior.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult Counter(string id)
        {
            CounterViewModel model = new CounterViewModel();
            model.student.ID = string.IsNullOrEmpty(id) ? "" : id;
            return View("Counter", model);
        }
    }
}
