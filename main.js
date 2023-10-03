const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let countHours = document.getElementById("hours");
let countMinutes = document.getElementById("minutes");
let countSeconds = document.getElementById("seconds");
let countMilliseconds = document.getElementById("milliseconds");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function startTimer() {
  milliseconds++;
  if (milliseconds > 99) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }

  countHours.innerHTML = hours < 10 ? "0" + hours : hours;
  countMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  countSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  countMilliseconds.innerHTML =
    milliseconds < 10 ? "0" + milliseconds : milliseconds;
}

startEl.onclick = function () {
  interval = setInterval(startTimer, 10); // runs every 10 seconds
};

stopEl.onclick = function () {
  clearInterval(interval);
};

resetEl.onclick = function () {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  countHours.innerHTML = "00";
  countMinutes.innerHTML = "00";
  countSeconds.innerHTML = "00";
  countMilliseconds.innerHTML = "00";
};
