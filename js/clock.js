const clock = document.querySelector("#clock");
const inputDate = document.querySelector("#clock-form input")
const clockForm = document.querySelector("#clock-form")
const inputDateInfo = document.querySelector("#clock-form .inputDateInfo")
function getClock(event) {
    event.preventDefault();//이거 넣으면 출력을 눌러 submit을 해야 동작이 되고 이거 안넣으면 날짜 선택하자마자 동작됨
    const today = new Date();//지금 현재 시간을 요일 / 월 / 일 / 연도 / 시 / 분/ 초 순으로 나열해줌
    const Dday = inputDate.valueAsDate; //목표 시간
    const distance = Dday - today; // 위의 두 개를 빼면 밀리 세컨드 단위로 시간의 차이가 나온다.
    const dd = Math.ceil(distance/(1000*60*60*24)); // 시간단위에서 24를 더 나눠주면 일자가 나온다.    
    clock.innerHTML ="기준일로부터 " + dd + "일 남았습니다 ";
    inputDateInfo.innerHTML = "lala" // input창에
    if(inputDate.valueAsDate!==null) {  //!==이라고 해야 작동함. !=하면 안됨
        clock.classList.remove("hidden"); //홈페이지 시작할 때 숨겨놨다가 이용자가 날짜 클릭하면 보여주기 위함 
    } else {
        clock.classList.add("hidden");
    }
}
clockForm.addEventListener("submit", getClock);