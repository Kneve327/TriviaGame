var number = 120;
var interval;
var count = 0;
var wrong = 0;
var right = 0;

$("#startButton").on("click", run);

function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#time-remaining").html("Time Remaining: " + number);


    if (number === 0) {

        stop();

        location.replace("thirdpage.html");

    }
}

$("#done").on("click", stop);


function stop() {

    clearInterval(interval);
    location.replace("fourthpage.html")

    right = 0;          
    for(var i = 1; i <= 15; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "right" && radio.checked) {
      right++;
    }
  }
 } 

    $("#wrong").html("Incorrect: " + wrong);
    $("#right").html("Correct: " + right);
}




run();

