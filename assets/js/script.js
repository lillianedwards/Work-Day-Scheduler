// wrap all the code that interacts with the DOM in a call to jQuery to ensure 
//that the code isn't run until the browser is finished rendering all the 
//elements in the html.

$(function () {
//VARIABLE DECLARATION

//reference to where the time is being displayed in the header
var timeDisplay = $("#currentDay");
// declare a variable to use dayjs() function to tell time 
var today = dayjs();

//H is setting the hour in military time, parseInt takes a string and returns as a number for comparing against div hour times
var currentHour = parseInt(today.format("H"));

//storing a reference to the saveBtn class that was [
var saveEventBtn = $(".saveBtn");

// Declaring global variable called storedEvents to keep locally stored events in, JSON parse is turning the string into an object. ? is if ____________ : else return an empty object 
var storedEvents = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : {};
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //event listener for clicking save button in each time div
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //Function Purpose: Store Events in Local Storage
  
  var SaveEvents = function (event) {
    // for (let i = 0; i < length; i++) {// how do i turn this on to save all of them 
    //targeting a sibling of the save button[1] in the array of the div, this targets that div and value is getting the value of the text area
    var textArea = $(this).siblings()[1].value;
    
    //the div is the parent of the submit button and by using this we are targeting the div of the button clicked, and the div is position 0 in the array of that element, we don't want the value, we want the id. 
    var hourId = $(this).parent()[0].id;
    
    storedEvents[hourId] = textArea;
    //Set the two variable in local storage 
    localStorage.setItem("events", JSON.stringify(storedEvents))
    
  };

 saveEventBtn.on("click", SaveEvents);
  //Set Dat and Time Display with desired format on CurrentDay id
  timeDisplay.text(today.format("dddd, MMMM, D, YYYY h:mm A"));
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //the for loop uses military time and we want to move through hours 9 to 5 (18 in Military)
  for (var i = 9 ;i < 18; i++) {
    //setting a variable of time to be the hour- id plus the number of 9 - 17 so we can loop through all the hour divs without making an array of all of the id's
    var time = $("#hour-" + i);
    //if the current hour matches the hour div, give this div the present styling
    if (i === currentHour) {
      time.addClass("present");
      //else if the current hour is less than the hour div, give it future styling
    } else if (i > currentHour) {
      time.addClass("future")
    } else {
      //anything else gie it past styling 
      time.addClass("past")
    }
  };
  
});

