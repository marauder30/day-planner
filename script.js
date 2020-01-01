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
var text9 = $(`#text9`)[0];
var text10 = $(`#text10`)[0];
var text11 = $(`#text11`)[0];
var text12 = $(`#text12`)[0];
var text13 = $(`#text13`)[0];
var text14 = $(`#text14`)[0];
var text15 = $(`#text15`)[0];
var text16 = $(`#text16`)[0];
var text17 = $(`#text17`)[0];

var taskStorage = {};

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours();
var dateTime = date + '  ' + time;


var todayDate = $(`#currentDay`)[0];



changeStatus();

// Retrieve current date and time
setTimer();	

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
        todayDate.innerHTML = date;
        changeCurrent();
        changePast();
    }, 1000);
}



// function to set past cards to secondary

function changePast() {

    if (time >= 10) {
        time9.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 11) {
        time10.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 12) {
        time11.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 13) {
        time12.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 14) {
        time13.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 15) {
        time14.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 16) {
        time15.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 17) {
        time16.setAttribute("class", "card border-secondary mb-3");
    }
    if (time >= 18) {
        time17.setAttribute("class", "card border-secondary mb-3");
    }
}


// function to set current card to bg-danger etc

function changeCurrent() {


    
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

document.addEventListener("click", function(event) {
    var element = event.target;
    
    if (element.matches("#button9") === true) {
        console.log($(`#text9`)[0].value);
    }
    if (element.matches("#button10") === true) {
        console.log($(`#text10`)[0].value);
    }
    if (element.matches("#button11") === true) {
        console.log($(`#text11`)[0].value);
    }
    if (element.matches("#button12") === true) {
        console.log($(`#text12`)[0].value);
    }
    if (element.matches("#button13") === true) {
        console.log($(`#text13`)[0].value);
    }
    if (element.matches("#button14") === true) {
        console.log($(`#text14`)[0].value);
    }
    if (element.matches("#button15") === true) {
        console.log($(`#text15`)[0].value);
    }
    if (element.matches("#button16") === true) {
        console.log($(`#text16`)[0].value);
    }
    if (element.matches("#button17") === true) {
        console.log($(`#text17`)[0].value);
    }
    
})

// var taskStorage = {};