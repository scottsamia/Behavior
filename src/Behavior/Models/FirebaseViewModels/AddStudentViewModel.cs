using Behavior.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Behavior.Models.FirebaseViewModels
{
    public class AddStudentViewModel
    {
        public AddStudentViewModel()
        {
            Behaviors = new List<string>();
        }
        [Display(Name ="First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Display(Name = "Age")]
        public int Age { get; set; }
        public List<string> Behaviors { get; set; }

    }
}
