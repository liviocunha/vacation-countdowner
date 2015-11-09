// set target date
var target_date = new Date("July 4, 2025").getTime();

// variables for time units
var days, 
    hours, 
    minutes, 
    seconds;

// get DOM elements
var countdown = document.getElementById("countdown");
var countbar = document.getElementById("countbar");

// update countdown object every second
function the_end(){
    clearInterval(counter_intervals);
    countbar.innerText = "ALL DONE!!!";
    countdown.innerHTML = "IT'S CHRISTMAS!"; // or whatever holiday you're counting down to
}

var counter_intervals = setInterval(function () {
    
    // how many seconds are left?
    var now = new Date().getTime();
    var time_to_hour = 55200; // I counted down to a specific hour. If so, specify seconds in that day to that hour
    var remaining = (target_date - now) / 1000 + time_to_hour;
    
    // don't have negative countdowns (count-ups?)
    if (remaining <= 0) { 
        the_end();
    }
    
    // paint DOM objects
    countbar.style.width = ((24796800 - remaining) / 24796800 * 100) + "%";
    countbar.innerText = parseInt(countbar.style.width) + "% there!";
    
    // mathy stuff
    days = parseInt(remaining / 86400);
    remaining = remaining % 86400;
    
    hours = parseInt(remaining / 3600);
    remaining = remaining % 3600;
    
    minutes = parseInt(remaining / 60);
    seconds = parseInt(remaining % 60);
    
    // update counter
    countdown.innerHTML = days + "Days " + hours + "h "
        + minutes + "m " + seconds + "s";  
    
}, 1000);

