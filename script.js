// html references
var time9 = document.getElementById("9am");
var time10 = document.getElementById("10am");
var time11 = document.getElementById("11am");
var time12 = document.getElementById("12pm");
var time1 = document.getElementById("1pm");
var time2 = document.getElementById("2pm");
var time3 = document.getElementById("3pm");
var time4 = document.getElementById("4pm");
var time5 = document.getElementById("5pm");
var todaysDate = document.getElementById("currentDay");


// Retrieve current date and time
setTimer();	




// function a


function setTimer() {
    
    setInterval(function() {
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
        todaysDate.innerHTML = dateTime;
        
    }, 1000);
}

//function b

//function c

// use jquery and bootstrap to construct a simple single day planner
// planner should use normal business hours, 9 -5
// each slot represents an hour and has a button to save input (modal?)
// clicking save will store the input and time in localStorage
// display current date at top of calendar
// time slots should be color coded by current/past/future, updating by time 

