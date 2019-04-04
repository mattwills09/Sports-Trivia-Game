// SET VARIABLES FOR QUIZ QUESTIONS, USER ANSWERS, SUBMIT BUTTON, RESET, RESULTS, SCOREBOARD

var quizContainer = $("#quiz");
var showResults = $("#results");
var timeLeft = $("timeLeft");
timeLeft = 40;
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
    timeLeft--;
    $("#timeLeft").html("<h2>" + timeLeft + "</h2>");

    if (timeLeft === 0) {
      alert("Time Up!  Let's see your scores!");
      stop();
    }
}

function stop() {
    clearInterval(intervalId);
    showResults();
}

function submit() {
  clearInterval(intervalId);
  clockRunning = false;

  var radios = document.getElementsByName('q1', 'q2', 'q3', 'q4', 'q5');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
      console.log(radios);
    break;
  }
}

  $("#results").html("<em><b>You got " + showResults + " / 5 correct!</b></em");

}

function showResults() {

}

function reset() {
  
}

//----------------------------------------------


// document.getElementById("gameForm").onsubmit = submit(); {
//   q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
//   q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
//   q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
//   q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
//   q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);

//   showResults = q1 + q2 + q3 + q4 + q5;

//   document.getElementById("results").innerHTML = showResults;
//   console.log(showResults);
//   // return false;
// }

// TIMER NEEDED AFTER QUIZ STARTS, WHEN IT RUNS OUT, RUN SHOWRESULTS() FUNCTION
// SET TIMEOUT, OR 

// HAVE GAME RESET AFTER SHOWS RESULTS (WITH BUTTON OR TIMER)