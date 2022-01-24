// Set Current Date with Moment.js 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Time Block Variables 
var blockOne = $("#9am");
var blockTwo = $("#10am");
var blockThree = $("#11am");
var blockFour = $("#12pm");
var blockFive = $("#01pm");
var blockSix = $("#02pm");
var blockSeven = $("#03pm");
var blockEight = $("#04pm");
var blockNine = $("#05pm");

function initPage() {
    // Console log
      console.log("Current Hour " + hour);
      var hour9 = JSON.parse(localStorage.getItem("09:00 am"));
      blockOne.val(hour9);
    
      var hour10 = JSON.parse(localStorage.getItem("10:00 am"))
      blockTwo.val(hour10);
      
      var hour11 = JSON.parse(localStorage.getItem("11:00 am"))
      blockThree.val(hour11);
      
      var hour12 = JSON.parse(localStorage.getItem("12:00 pm"))
      blockFour.val(hour12);
      
      var hour1 = JSON.parse(localStorage.getItem("01:00 pm"))
      blockFive.val(hour1);
      
      var hour2 = JSON.parse(localStorage.getItem("02:00 pm"))
      blockSix.val(hour2);
      
      var hour3 = JSON.parse(localStorage.getItem("03:00 pm"))
      blockSeven.val(hour3);
     
      var hour4 = JSON.parse(localStorage.getItem("04:00 pm"))
      blockEight.val(hour4);
      
      var hour5 = JSON.parse(localStorage.getItem("05:00 pm"))
      blockNine.val(hour5);
    } 

// Function to change background color according to past present, or future

var hour = moment().hours();
console.log("Current Time" + hour);

function background () {

    $(".form-control").each(function () {
        // parseInt: convers a string into an integer 
        var currentTime = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(currentTime);
        console.log(hour);
  
        if (hour > currentTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } 
        
        else if (hour < currentTime) {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        } 
        
        else {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");
        }
        
    });
  }

// Calling Functions 
$(document).ready(function(){
    initPage();
    background();

  // Button Saves to localStorage 
  $(".saveBtn").on("click", function(){

    var userInput;
    var hourSpan;

    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
});