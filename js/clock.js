//여긴 목표시간까지 남은 날 계산
// const clock = document.querySelector("#clock");
// const inputDate = document.querySelector("#clock-form input")
// const clockForm = document.querySelector("#clock-form")
// const inputDateInfo = document.querySelector("#clock-form .inputDateInfo")
// function getDday(event) {
//     event.preventDefault();//이거 넣으면 출력을 눌러 submit을 해야 동작이 되고 이거 안넣으면 날짜 선택하자마자 동작됨
//     const today = new Date();//지금 현재 시간을 요일 / 월 / 일 / 연도 / 시 / 분/ 초 순으로 나열해줌
//     const Dday = inputDate.valueAsDate; //목표 시간
//     const distance = Dday - today; // 위의 두 개를 빼면 밀리 세컨드 단위로 시간의 차이가 나온다.
//     const dd = Math.ceil(distance/(1000*60*60*24)); // 시간단위에서 24를 더 나눠주면 일자가 나온다.    
//     clock.innerHTML ="기준일로부터 " + dd + "일 남았습니다 ";
//     //inputDateInfo.innerHTML = // input창에
//     if(inputDate.valueAsDate!==null) {  //!==이라고 해야 작동함. !=하면 안됨
//         clock.classList.remove("hidden"); //홈페이지 시작할 때 숨겨놨다가 이용자가 날짜 클릭하면 보여주기 위함 
//     } else {
//         clock.classList.add("hidden");
//     }
// }
// clockForm.addEventListener("submit", getDday);
//----------------
const timeNow = document.querySelector("#timeNow")
const intervalClock = setInterval(getClock, 1000);
function getClock() {
    const today = new Date();
    const dd = today.getDate();
    const hh = String(today.getHours()).padStart(2, '0');
    const mm = String(today.getMinutes()).padStart(2, '0');
    const ss = String(today.getSeconds()).padStart(2, '0');
    //const today = new Date();//지금 현재 시간을 요일 / 월 / 일 / 연도 / 시 / 분/ 초 순으로 나열해줌
    const christmasEve = new Date(2021, 11, 24); //목표 시간
    const distance = christmasEve - today; // 위의 두 개를 빼면 밀리 세컨드 단위로 시간의 차이가 나온다.
    //const dd = Math.floor(distance/(1000*60*60*24)); // 시간단위에서 24를 더 나눠주면 일자가 나온다.
    //const hh = Math.floor(distance/(1000*60*60)%24);// distance/(1000*60)(분단위)에서 60을 더 나눠주면 시간단위가 됨
    //const mm = Math.floor(distance/(1000*60)%60); // distance/1000(초단위)에서 60을 더 나눠주면 분단위가 됨.
    //const ss = Math.floor(String(distance/(1000)%60).padStart(2, '0'));// distance는 단위가 밀리세컨드기 때문에 1000을 나눠주면 초단위가 됨
    timeNow.innerHTML = hh + "시 : " + mm + "분 : " + ss + "초"
}
timeNow.innerHTML = getClock()