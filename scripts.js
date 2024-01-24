const display = document.querySelector(".display");
const time = document.querySelector(".time");
const start = document.querySelector(".start");
const set = document.querySelector(".set");

function Time() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let period = "";

  //   hour = update(hour);
  //   minute = update(minute);
  //   second = update(second);

  display.value = hour + ":" + minute + ":" + second;

  setTimeout(Time, 1000);
}

// function update(t) {
//   if (t < 10) {
//     return "0" + t;
//   } else {
//     return t;
//   }
// }

Time();

// Countdown Timer
const btnTimeElement = document.querySelector('[data-action="time"]');
const btnStartElement = document.querySelector('[data-action="start"]');
const btnSetElement = document.querySelector('[data-action="set"]');
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
let timerTime = 0;
let interval;

const startTimer = () => {
  isRunning = true;
  interval = setInterval(incrementTImer, -1000);
};

const stopTimer = () => {
  isRunning = false;
  clearInterval(interval);
};

const setTimer = () => {
  minutesElement.innerText = "00";
  secondsElement.innerText = "00";
};

const pad = (number) => {
  return number < 10 ? "0" + number : number;
};

const decrementTimer = () => {
  timerTime--;

  const numberMinutes = Math.floor(timerTime / 60);
  const numberSeconds = timerTime % 60;

  minutesElement.innerText = pad(numberMinutes);
  secondsElement.innerText = pad(numberSeconds);
};

btnTimeElement.addEventListener("click", showTime);

btnStartElement.addEventListener(
  "click",
  (timerStart = () => {
    isRunning === false ? startTimer() : stopTimer();
  })
);

btnSetElement.addEventListener("click", setTimer);
