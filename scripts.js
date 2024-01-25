const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const time = document.querySelector(".time");

//get elements
const dropdownTitle = document.querySelector(".dropdown .title");
const dropdownOptions = document.querySelectorAll(".dropdown .option");

//bind listeners to these elements
dropdownTitle.addEventListener("click", toggleMenuDisplay);
dropdownOptions.forEach((option) =>
  option.addEventListener("click", handleOptionSelected)
);
document
  .querySelector(".dropdown .title")
  .addEventListener("change", handleTitleChange);

// Dropdown Menu

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}

function toggleDisplay(elem) {
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === "none" || curDisplayStyle === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector(".menu");
  const icon = dropdown.querySelector(".fa-angle-right");

  toggleClass(menu, "hide");
  toggleClass(icon, "rotate-90");
}
function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, "hide");

  const id = e.target.id;
  const newValue = e.target.textContent + " ";
  const titleElem = document.querySelector(".dropdown .title");
  const icon = document.querySelector(".dropdown .title .fa");

  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector(".dropdown .title").dispatchEvent(new Event("change"));
  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon, "rotate-90", 0));
}

function handleTitleChange(e) {
  const result = document.getElementById("result");

  result.innerHTML = "The result is: " + e.target.textContent;
}

//   Time
function Time() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let period = "";
  hour = twelveHour(hour);

  hour = update(hour);
  minute = update(minute);
  second = update(second);

  time.innerText = hour + ":" + minute + ":" + second;

  setTimeout(Time, 1000);
}

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

function twelveHour(h) {
  if (h > 12) {
    return h - 12;
  } else {
    return h;
  }
}

Time();

// Countdown Timer
const btnStartElement = document.querySelector('[data-action="start"]');
const btnStoptElement = document.querySelector('[data-action="stop"]');
const btnResetElement = document.querySelector('[data-action="reset"]');
const hoursElement = document.querySelector("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countElement = document.getElementById("count");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let isRunning = false;

btnStartElement.addEventListener("click", function () {
  isRunning = true;
  stopwatch();
});

btnStoptElement.addEventListener("click", function () {
  isRunning = false;
});

btnResetElement.addEventListener("click", function () {
  isRunning = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopwatch() {
  if (isRunning) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }
  }

  let hrString = hour;
  let minString = minute;
  let secString = second;
  let countString = count;

  if (hour < 10) {
    hrString = "0" + hrString;
  }

  if (minute < 10) {
    minString = "0" + minString;
  }

  if (second < 10) {
    secString = "0" + secString;
  }

  if (count < 10) {
    countString = "0" + countString;
  }

  document.getElementById("hour").innerHTML = hrString;
  document.getElementById("minutes").innerHTML = minString;
  document.getElementById("seconds").innerHTML = secString;
  document.getElementById("count").innerHTML = countString;
  setTimeout(stopwatch, 10);
}
