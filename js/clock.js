const clock = document.querySelector("#clock");
const intervalClock = setInterval(getClock, 1000);

function getClock() {
    const today = new Date();
    const dd = today.getDate();
    const hh = today.getHours();
    const mm = today.getMinutes();
    const ss = String(today.getSeconds()).padStart(2, '0');
    clock.innerHTML = dd + "d : " + hh + "h : " + mm + "m : " + ss + "s"
}

clock.innerHTML = intervalClock;
getClock();