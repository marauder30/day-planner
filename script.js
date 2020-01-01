// html references
// var time9 = document.getElementById("9am");
var time9 = $(`#9am`)[0];
var time10 = $(`#10am`)[0];
var time11 = $(`#11am`)[0];
var time12 = $(`#12pm`)[0];
var time13 = $(`#1pm`)[0];
var time14 = $(`#2pm`)[0];
var time15 = $(`#3pm`)[0];
var time16 = $(`#4pm`)[0];
var time17 = $(`#5pm`)[0];

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours();
var dateTime = date + '  ' + time;
console.log(dateTime);


var todayDate = $(`#currentDay`)[0];


console.log(time9);

changeStatus();

// Retrieve current date and time
setTimer();	
console.log(time10);

// function to change data attribute, perhaps redundant


function changeStatus() {
    time9.setAttribute("data-state", "present");


}




// function to refresh time and date, print date to page


function setTimer() {
    
    setInterval(function() {
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours();
        console.log(time);
        todayDate.innerHTML = date;
        changeCurrent();
        changePast();
    }, 1000);
}



// function to set past cards to secondary

function changePast() {
    time9.setAttribute("class", "card border-secondary mb-3");
}


// function to set current card to bg-danger etc

function changeCurrent() {

    console.log(time);
    
    if (time === 9) {
        time9.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 10) {
        time10.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 11) {
        time11.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 12) {
        time12.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 13) {
        time13.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 14) {
        time14.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 15) {
        time15.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 16) {
        time16.setAttribute("class", "card text-white bg-danger mb-3");
    }
    if (time === 17) {
        time17.setAttribute("class", "card text-white bg-danger mb-3");
    }
    

}



// save input to localStorage



