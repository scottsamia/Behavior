$('#addStudent').on("click", function () {
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

$('#updateStudent').on("click", function () {
    var student = {
        id: $('input#id').val(),
        attributes: {
            firstName: $('input#FirstName').val(),
            lastName: $('input#LastName').val(),
            age: $('input#Age').val()
        }
    };
   

    if (behavior.firebase.updateStudent(student)) {
        //$('input#FirstName').val("");
        //$('input#LastName').val("");
        //$('input#Age').val(0);
    }

});