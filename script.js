// html references
// var time9 = document.getElementById("9am");
var time9 = $(`#9am`)[0];
var time10 = $(`#10am`)[0];
var time11 = $(`#11am`)[0];
var time12 = $(`#12pm`)[0];
var time1 = $(`#1pm`)[0];
var time2 = $(`#2pm`)[0];
var time3 = $(`#3pm`)[0];
var time4 = $(`#4pm`)[0];
var time5 = $(`#5pm`)[0];


var todayDate = $(`#currentDay`)[0];


console.log(time9);

changeStatus();

// Retrieve current date and time
setTimer();	
console.log(time10);




function changeStatus() {
    time9.setAttribute("data-state", "present");
    console.log(time9);
    changeCurrent();
    changePast();
}




// function a


function setTimer() {
    
    setInterval(function() {
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours();
        todayDate.innerHTML = date;
    }, 1000);
}



// set all cards to green/future initially

// function to set current card to bg-danger etc

function changeCurrent() {
    time10.setAttribute("class", "card text-white bg-danger mb-3");
}

// function to set past cards to secondary

function changePast() {
    time9.setAttribute("class", "card border-secondary mb-3");
}



// use jquery and bootstrap to construct a simple single day planner
// planner should use normal business hours, 9 -5
// each slot represents an hour and has a button to save input (modal?)
// clicking save will store the input and time in localStorage
// display current date at top of calendar
// time slots should be color coded by current/past/future, updating by time 

