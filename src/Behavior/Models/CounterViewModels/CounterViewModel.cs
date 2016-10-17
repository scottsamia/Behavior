using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Behavior.Models.CounterViewModels
{
    public class CounterViewModel
    {
        public CounterViewModel()
        {
            student = new Student();
            teacher = new Teacher();
        }
        public Student student { get; set; }
        public Teacher teacher { get; set; }

    }
}
