var hour = document.querySelector(".hour");
var minute = document.querySelector(".time");
var second = document.querySelector(".second");
var t = 3600;
var m = 2;
var s = 15;
var h = 00;
var block = document.querySelector(".time--clock");
var anouce = document.querySelector(".anonouce__end");

flag = 0;
minute.innerText = m;
second.innerText = s;
hour.innerText = h;
function mytime() {
  if (s == 0) {
    second.innerText = s;
    m = m - 1;
    if (m == -1) {
      m = 59;
      h = h - 1;
      if (h == -1) {
        h = 0;
      }
      hour.innerText = h;
    }
    s = 60;
    minute.innerText = m;
  } else {
    s = s - 1;
    second.innerText = s;
  }
}
setInterval(mytime2, 1000);
function mytime2() {
  if (s == 0) {
    if (m == 0) {
      minute.innerText = m;
      if (h == 0) {
        block.style.display = "none";
        anouce.style.display = "block";
        return;
      } else {
        h = h - 1;
      }
      hour.innerHTML = h;
      m = 59;
    } else {
      m = m - 1;
    }
    minute.innerText = m;
    s = 59;
  } else {
    s = s - 1;
  }
  second.innerText = s;
}
