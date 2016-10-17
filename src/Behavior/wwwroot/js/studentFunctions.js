var behavior = behavior || {};

behavior.student = function () {
    var init = function (database, lastName) {
        var key = "";
        this.database = database;
        if (typeof lastName != 'undefined') {
            database.ref('students').orderByChild("lastName").equalTo(lastName).on("child_added", function (snapshot) {
                key = snapshot.key;
                database.ref('/students/' + key).once('value').then(function (snapshot) {
                    _updateStudentElements(snapshot.val());
                });
            });
        }


    },
    getStudentById = function (id, callback) {
        if (typeof id != 'undefined') {

            this.database.ref('/students/' + id).once('value').then(function (snapshot) {
                var student = snapshot.val();
                this.firstName = student.firstName;
                this.lastName = student.lastName;
                this.age = student.age;
                callback(student);
            });

        }
    },
    _updateStudentElements = function (student) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
        this.age = student.age;
        $(".studentFirstNameLbl").text(student.firstName);
        $(".studentLastNameLbl").text(student.lastName);
        $(".studentFullNameLbl").text(student.firstName + " " + student.lastName);
    };

    return {
        init: init,
        firstName: null,
        lastName: null,
        age: null,
        database: null,
        getStudentById: getStudentById

    };
}();