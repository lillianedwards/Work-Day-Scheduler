//VARIABLE DECLARATIONS

var timeDisplay = $("#currentDay");
var today = dayjs();
timeDisplay.text(today.format("dddd, MMMM, D, h:mmA"));

var saveEventBtn = $("#save-event");

var currentHour = moment().format("hA");


var hours = ["9am", "10am", "11am", "12pm" ""]

var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");



$("hourDivs") = []

//FUNCTIONS

var setTimeClassSaveEvents = function () {
  for (let i = 9; i < length; i++) {
    const element = arr];
    
  }
}
// $(function storeEvents() {
  //   console.log("I am in the function")
  //  });
  
  
  
  
  
  
  
  //EVENT LISTENERS
  $(".saveBtn").on("click", setTimeClassSaveEvents)
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  













  var event9 = $("#event-9");
  var event10 = $("#event-10");
  var event11 = $("#event-11");
  var event12 = $("#event-12");
  var event13 = $("#event-13");
  var event14 = $("#event-14");
  var event15 = $("#event-15");
  var event16 = $("#event-16");
  var event17 = $("#event-17");
  
  var eventsAllDay = {
    Events9AM: event9.val(),
    Events10AM: event10.val(),
    Events11AM: event11.val(),
    Events12PM: event12.val(),
    Events1PM: event13.val(),
    Events2PM: event14.val(),
    Events3PM: event15.val(),
    Events4PM: event16.val(),
    Events5PM: event17.val(),
  };