var behavior = behavior || {};

behavior.firebase = function () {
    var initComplete, config,
    init = function (callback) {

        // Initialize Firebase
        //Get Settings from server config file
        $.ajax({
            url: "/Firebase/getFirebaseConfig",
            type: 'GET',
            context: this,
            success: function (data) {
                config = data;
                firebase.initializeApp(config);
                //These are public properties using the this keyword
                this.database = firebase.database();
                this.students = firebase.database().ref("students");
                this.behaviors = firebase.database().ref("behaviors");

                initComplete = true;
                callback(initComplete);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                initComplete = false;
                callback(initComplete);
            }
        });

    },
    addStudent = function (student) {
        var student = student || {};
        if (initComplete && !$.isEmptyObject(student)) {
            var newPostKey = this.database.ref().child('students').push().key;
            var updates = {};
            updates['/students/' + newPostKey] = student;
            var index;
            for (var behavior in student.behaviors) {
                updates['/behaviors/' + behavior + '/students/' + newPostKey] = true;

            }


            this.database.ref().update(updates);
            return true;
        }
        return false;
    },
    updateStudent = function (student) {
        var student = student || {};
        if (initComplete && !$.isEmptyObject(student)) {
            //var updates = {};
            //updates['/students/' + student.id] = student.attributes;
            //this.database.ref().update(updates);
            this.database.ref('students/' + student.id).update(student.attributes);
            return true;
        }
        return false;
    },
    deleteStudent = function (key) {

    },
    addCountSession = function (countSession) {
        var countSession = countSession || {};
        if (initComplete && !$.isEmptyObject(countSession)) {
            var newPostKey = this.database.ref().child('countSessions').push().key;
            var updates = {};
            updates['/countSessions/' + newPostKey] = countSession;
            updates['/students/' + countSession.studentID + '/countSessions/' + newPostKey] = true;
            this.database.ref().update(updates);
            return countSession;
        }
        return {};
    },
    getListOfStudents = function (callback) {

        this.students.once('value').then(function (snapshot) {
            callback(snapshot.val());
        });
    },
    getListOfBehaviors = function (callback) {

        this.behaviors.once('value').then(function (snapshot) {
            callback(snapshot.val());
        });
    },
    getCountSessions = function (student, callback) {
        this.students.child(student.id).child('countSessions').once('value').then(function (snapshot) {
            callback(snapshot.val());
        });
    };

    return {
        config: config,
        init: init,
        database: null,
        addStudent: addStudent,
        updateStudent: updateStudent,
        deleteStudent: deleteStudent,
        getListOfStudents: getListOfStudents,
        getListOfBehaviors: getListOfBehaviors,
        addCountSession: addCountSession,
        getCountSessions: getCountSessions
    };
}();