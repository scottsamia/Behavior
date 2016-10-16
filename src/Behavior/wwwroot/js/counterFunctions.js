var behavior = behavior || {};

behavior.counter = function () {
    var init = function () {
        this.count = 0;
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
    _updateLabels = function (count) {
        $(".counterLbl").text(count);
    };

    return {
        count: null,
        init: init,
        increase: increase,
        decrease: decrease

    };
}();