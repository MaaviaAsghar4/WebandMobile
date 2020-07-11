
var min = 0;
var sec = 0;
var ms = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msHeading = document.getElementById("ms");
var interval;

function timer() {
    ms++;
    msHeading.innerHTML = ms;
    if (ms > 99) {
        sec++;
        secHeading.innerHTML = sec;
        ms = 0;
    } else if (sec > 59) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer,10); 
    document.getElementById("btn").disabled = true;  
}

function stop() {
    clearInterval(interval);
    document.getElementById("btn").disabled = false;  
}

function reset() {
    min = 0;
    sec = 0;
    ms = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msHeading.innerHTML = ms;
    clearInterval(interval);
    document.getElementById("btn").disabled = false;  
}