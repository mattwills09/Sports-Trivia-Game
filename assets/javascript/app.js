// SET VARIABLES FOR QUIZ QUESTIONS, USER ANSWERS, SUBMIT BUTTON, RESET, RESULTS, SCOREBOARD
$(document).ready(function() {

var quizContainer = $("#quiz");
var showResults = $("#results");
var timeLeft = $("timeLeft");
var counter=40;
$("#timeLeft").html(counter);
var intervalId;

$("#start").on("click", start);
$("#submit").on("click", submit);
$("#reset").on("click", reset);


//----------------------------------------------
// FUNCTIONS

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    }

  function decrement() {
    counter--;
    $("#timeLeft").html(counter);

    if (counter === 0) {
      alert("Time Up!  Let's see your scores!");
      stop();
    }
}

function stop() {
    clearInterval(intervalId);
    submit();
}

var userScore = 0;
var nodeList = document.querySelectorAll("input[type='radio']");

function submit() {
  event.preventDefault();
  clearInterval(intervalId);
  clockRunning = false;


  
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].checked) {
      userScore += parseInt(nodeList[i].value);
      console.log(userScore);
    }
  }

  $("#results").html("<em><b>You got " + userScore + " / 5 correct!</b></em");
}

// HAVE GAME RESET AFTER SHOWS RESULTS (WITH BUTTON OR TIMER)
function reset() {
  $("#results").empty();

  clearInterval(intervalId);
  
  counter=40;
  $("#timeLeft").empty();
  $("#timeLeft").html(counter);

  for (var j = 0; j < nodeList.length; j++) {
    nodeList[j].checked = false;
}}

});

//----------------------------------------------