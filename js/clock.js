$('document').ready(function() {

    var setCurrentDate = function() {

        var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var months = new Array(7);
        months[0] =  "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";

        Date.prototype.today = function() {

            return {
                weekDay: weekday[this.getDay()],
                month: months[this.getMonth()],
                date: this.getDate(),
                year: this.getFullYear()
            }
        };

        Date.prototype.sup = function() {

            var currentdate = newDate.today().date;

            var sups = new Array(4);
            sups[0] = "st";
            sups[1] = "nd";
            sups[2] = "rd";
            sups[3] = "th";

            if(currentdate === 1 || currentdate === 21 || currentdate === 31) {
                return sups[0];
            } else if (currentdate === 2 || currentdate === 22) {
                return sups[1];
            } else if (currentdate === 3 || currentdate === 23) {
                return sups[2];
            } else {
                return sups[3];
            }
        };

        var newDate = new Date();
        var day = newDate.today().weekDay;
        var month = newDate.today().month;
        var date = newDate.today().date;
        var sup = newDate.sup();
        var year = newDate.today().year;


        $("#day").html(day + ", ");
        $("#month").html(month + " ");
        $("#date").html(date + "<sup>" + sup + "</sup>, ");
        $("#year").html(year);

    };

    var clock = function() {

        Date.prototype.time = function() {

            var addZero = function(input) {
                if (input < 10) {
                    return ("0" + input);
                } else {
                    return input;
                }
            };

            var H = this.getHours();

            return {
                hours : function() {

                    if (H > 12 && H < 22) {
                        return (addZero((H - 12)))
                    } else if (H > 22 && H > 12) {
                        return (H - 12)
                    } else {
                        return addZero(H);
                    }
                },

                minutes : addZero(this.getMinutes()),
                seconds : addZero(this.getSeconds()),
                ampmHours : this.getHours(),
                ampm : function() {
                    var H = this.ampmHours;
                    if(H > 12) {
                        return "pm";
                    } else {
                        return "am"
                    }
                }

            }

        };
        var newTime = new Date();
        var hours = newTime.time().hours;
        var minutes = newTime.time().minutes;
        var seconds = newTime.time().seconds;
        var am_pm = newTime.time().ampm();

        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
        $("#ampm").html(am_pm);

    };



    clock();
    setInterval(clock, 1000);
    setCurrentDate();
});




