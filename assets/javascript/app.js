var number = 120;
var interval;

$("#done").on("click", stop);
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

function stop() {

    clearInterval(interval);

    location.replace("fourthpage.html")

}

run();