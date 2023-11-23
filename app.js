var hours = document.getElementById("hours")
var mins = document.getElementById("mins")
var seconds = document.getElementById("secs")
var mseconds = document.getElementById("msecs")
var counter = 0
var interval;

var msecCounter = 0
var secCounter = 0
var minCounter = 0
var hourCounter = 0

function timer(){
    msecCounter++
    mseconds.innerHTML = msecCounter

    if (msecCounter === 100) {
        secCounter++
        seconds.innerHTML = secCounter
        msecCounter = 0
        if (secCounter === 60) {
            secCounter = 0
            minCounter++
            mins.innerHTML = minCounter
            if(minCounter === 60){
                minCounter = 0
                hourCounter++
                hours.innerHTML = hourCounter
            }
        }
    }
    var startbtn = document.getElementById("startbtn")
    startbtn.setAttribute("disabled")
}

function timerStart() {
    interval = setInterval(timer, 10)
    startBtn.disabled = true;
}


function timerStop() {
    clearInterval(interval)
    startBtn.disabled = false;
}


function timerReset() {
    clearInterval(interval)

    mins.innerHTML = "00"
    secs.innerHTML = "00"
    msecs.innerHTML = "00"
    secCounter = 0
    minCounter = 0
    msecCounter = 0
    startBtn.disabled = false;

}