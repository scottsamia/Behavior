var behavior = behavior || {};

behavior.student = function () {
    var id, firstName, lastName,
    init = function (database, lastName) {
        var key = "";
        database.ref('students').orderByChild("lastName").equalTo(lastName).on("child_added", function (snapshot) {
            key = snapshot.key;
            database.ref('/students/' + key).once('value').then(function (snapshot) {
                _updateStudentElements(snapshot.val());
            });
        });
        

    },
    _updateStudentElements = function (student) {
        $(".studentFirstNameLbl").text(student.firstName);
        $(".studentLastNameLbl").text(student.lastName);
        $(".studentFullNameLbl").text(student.firstName + " " + student.lastName);
    };

    return {
        init: init,
        firstName: firstName,
        lastName: lastName

    };
}();