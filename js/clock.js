const clock = document.querySelector("#clock");
const intervalClock = setInterval(getClock, 1000);

function getClock() {
    const today = new Date();//지금 현재 시간을 요일 / 월 / 일 / 연도 / 시 / 분/ 초 순으로 나열해줌
    const christmasEve = new Date(2021, 11, 24); //목표 시간
    const distance = christmasEve - today; // 위의 두 개를 빼면 밀리 세컨드 단위로 시간의 차이가 나온다.
    const dd = Math.floor(distance/(1000*60*60*24)); // 시간단위에서 24를 더 나눠주면 일자가 나온다.
    const hh = Math.floor(distance/(1000*60*60)%24);// distance/(1000*60)(분단위)에서 60을 더 나눠주면 시간단위가 됨
    const mm = Math.floor(distance/(1000*60)%60); // distance/1000(초단위)에서 60을 더 나눠주면 분단위가 됨.
    const ss = Math.floor(String(distance/(1000)%60).padStart(2, '0'));// distance는 단위가 밀리세컨드기 때문에 1000을 나눠주면 초단위가 됨
    clock.innerHTML = dd + "d : " + hh + "h : " + mm + "m : " + ss + "s"
}

clock.innerHTML = intervalClock;
getClock();