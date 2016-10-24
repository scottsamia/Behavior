$('select#Behaviors').on('change', function () {
    var behaviors = $('select#Behaviors').val();
    behavior.counter.behavior = $(this).val();
});

$('#countUp').on("click", function () {
    behavior.counter.increase();
});

$('#countDown').on("click", function () {
    behavior.counter.decrease();
});

$('#save').on("click", function () {
    if (behavior.counter.behavior != null) {
        behavior.counter.behavior = $('select#Behaviors').val();
        var countSession = behavior.firebase.addCountSession(behavior.counter.getCountSession());
        if (!$.isEmptyObject(countSession)) {
            $('#SessionDuration').text(countSession.duration + " seconds");
            $('#resultsSection').removeClass('hidden');
            $('#countUp').hide();
            $('#countDown').hide();
            $('#save').hide();
        }
    }
});

$('#back').on("click", function () {
    window.location.href = '/Home/Index';
});

$('#newSession').on("click", function () {
    window.location.reload();
});