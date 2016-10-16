var behavior = behavior || {};

behavior.firebase = function () {
    var initComplete, config,
    init = function () {

        // Initialize Firebase
        config = {
            apiKey: "",
            authDomain: "behavior-1a553.firebaseapp.com",
            databaseURL: "https://behavior-1a553.firebaseio.com",
            storageBucket: "behavior-1a553.appspot.com",
            messagingSenderId: "304296173564"
        };
        firebase.initializeApp(config);
        this.database = firebase.database();
        this.students = firebase.database().ref("students");
        this.behaviors = firebase.database().ref("behaviors");
        initComplete = true;
        return initComplete;
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
    };

    return {
        config: config,
        init: init,
        database: null,
        addStudent: addStudent

    };
}();