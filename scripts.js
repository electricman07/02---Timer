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
