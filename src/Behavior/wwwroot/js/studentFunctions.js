var behavior = behavior || {};

behavior.student = function () {
    var init = function (database, id) {
        this.database = database;
        this.id = id;
    },
    //Callback function that returns a student object
    getStudent = function (callback) {
        if (typeof this.id != 'undefined') {
          
            this.database.ref('/students/' + this.id).once('value').then(function (snapshot) {
                var student = snapshot.val();
                setStudent(student);
                callback(student);
            });

        }
    },
    setStudent = function (student) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
        this.age = student.age;
        
    };

    return {
        init: init,
        getStudent: getStudent,
        setStudent: setStudent
    };
}();