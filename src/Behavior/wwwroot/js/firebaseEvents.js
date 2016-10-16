$('#addUser').on("click", function () {
    var student = {
        firstName: $('#FirstName').val(),
        lastName: $('#LastName').val(),
        age: $('#Age').val(),
        behaviors: {}
    };
    var behaviors = $('select#Behaviors').val();
    for (var x = 0; x < behaviors.length; x++) {
        student.behaviors[behaviors[x]] = true;
    }
   
    if (behavior.firebase.addStudent(student)) {
        $('#FirstName').val("");
        $('#LastName').val("");
        $('#Age').val(0);
        $('select#Behaviors').val([]);
    }
        
});