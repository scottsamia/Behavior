using Behavior.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Behavior.Models
{
    public class Student : ApplicationUser
    {
        public int ID { get; set; }
        public string Class { get; set; }
        public double Height { get; set; }
        public double Age { get; set; }
    }
}
