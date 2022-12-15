
// only runs code once everything is loaded
$(document).ready(function () {
  

//sets key value for local storage
//allows user to save input in local storage
  $('.saveBtn').on('click', function() {
      var input = $(this).siblings('.description').val();
      var elTime = $(this).parent().attr('id');
      localStorage.setItem(elTime, input);
      console.log(input);
      console.log(elTime);
  })
  function currentTime() {
    //stores current hour in a variable
    var currentHour = dayjs().hour();
    // loop over time blocks
    $(".time-block").each(function () {
        var currentBlock = parseInt($(this).attr("id").split("hour-")[1]);
        // To check the time and add the classes for background indicators
        if (currentBlock < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (currentBlock === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
//gets any user input
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  currentTime();
 //displays the current date in the header of the page.
  $('#currentDay').html(dayjs().format('dddd'));
  
});
