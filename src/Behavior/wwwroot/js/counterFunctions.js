var behavior = behavior || {};

behavior.counter = function () {
    var init = function (database, student) {
        this.count = 0;
        this.startTime = new Date();
        console.log("The start time is: " + this.startTime);
        this.database = database;
        this.student = student;
        this.behavior = null;
        _updateLabels(this.count);
    },
    increase = function () {
        this.count++;
        _updateLabels(this.count);
    },
    decrease = function () {
        if (this.count > 0)
            this.count--;
        _updateLabels(this.count);
    },
    //Ends the count session and returns a session object
    getCountSession = function () {
        this.endTime = new Date();
        var duration = Math.round((this.endTime.getTime() - this.startTime.getTime()) / 1000)
        var countSession = {
            studentID: this.student.id,
            startTime: this.startTime,
            endTime: this.endTime,
            behavior: this.behavior,
            duration: duration,
            count: behavior.counter.count
        };
        return countSession;
    },
    _updateLabels = function (count) {
        $(".counterLbl").text(count);
        $(".counterStartTime").text(this.startTime)
    };

    return {
        count: null,
        init: init,
        increase: increase,
        decrease: decrease,
        getCountSession: getCountSession

    };
}();