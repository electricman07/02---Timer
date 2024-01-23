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

  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  hour = update(hour);
  minute = update(minute);
  second = update(second);

  display.innerText = hour + " : " + minute + " : " + second + " " + period;

  setTimeout(Time, 1000);
}

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

Time();
