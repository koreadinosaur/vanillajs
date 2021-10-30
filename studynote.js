const month = ["jan", "feb", "mar"]; //대괄호 안에 입력되는 것을 elements라고 함//
console.log(month);
const player = {
    name: "hj",
    age: 31,
    job: null,
    guild: function(guildname){
        console.log(guildname + "family")
    }//함수를 객체 안에서 구현한 것. 함수명과 function의 자리가 바뀜. name, age, job은 property라고 부름//
};
player.guild("apple")
console.log(player.name)
player.name = "kk"; //객체 안에 있는 변수 업데이트//


const Iamrich = false
const Iamrich = true //const는 업데이트 불가
let Iamrich2 = false
Iamrich2 = true //let은 업데이트 가능한데 let은 빼야함

const calculrator = {
    add: function (a, b) {
        console.log(a+b);
    },
};
calculrator.add(1, 2)

const calculrator = {
    div: function (a, b) {
        console.log(a/b);
    },
};

const calculator = {
    power: function(a, b){
        console.log(a**b);
    }
};
calculator.power(3, 5)

//2.11 복습//

function Kageplus(age){
    console.log(age+2);
};
console.log(Kage(30))

function Kagemultiple(a, b){
    console.log(a*b);
};
console.log(Kagemultiple(console.log(Kageplus(30)), 2))

function Kageplus(age){
    return age + 2
};
console.log(Kageplus(30))

function Kagemultiple(a, b){
    return a*b;
};
console.log(Kageplus(30), 3)
--------------------------
const calculrator = {
    add: function (a, b) {
        console.log(a+b)
    },
    div: function (a, b) {
        console.log(a/b)
    },
    power: function(a, b){
        console.log(a**b);
    },

};
calculrator.add(1, 2)
calculrator.div(calculrator.add(1, 2), 2)
calculrator.power(2, 4)

const calculrator = {
    div: function (a, b) {
        console.log(a/b);
    },
};

const calculator = {
    power: function(a, b){
        console.log(a**b);
    }
};
-------------------------------------
const calculrator = {
    add: function (a, b) {
        return a + b
    },
    div: function (a, b) {
        return a / b
    },
    power: function(a, b){
        return a * b;
    },

};
calculrator.add(1, 2)
calculrator.div(6, 2)
calculrator.power(2, 4)//이렇게 하면 마지막에 입력된 것만 출력함. 인수가 a,b로 동일하기때문에//
ㅁㄴㅇㄹ

const addcalculrator = calculrator.add(1, 2)
const divcalculrator = calculrator.div(6, 4)
console.log(addcalculrator)

--------------------------------------------
2.13
const age = prompt("how old are you?")
console.log(age);

----------------------------------------------------
3.0-3.5

const menu = document.querySelector(".menu h1:nth-child(1)")
function clickevent(){
  console.log("it was clicked");
  menu.style.color = "blue"  
};
function mouseenterevent(){
    menu.style.border = '5px dotted orange';
}
function mouseleave(){
    menu.style = null;
}

function HandleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

menu.addEventListener("click", clickevent)
menu.addEventListener("mouseenter", mouseenterevent)
menu.addEventListener("mouseleave", mouseleave)

window.onresize = HandleWindowResize;

document.get



const title = document.querySelector("h2");//class나 id 없어도 태그만으로도 호출가능//
const superEventHandler = {
  superEventHandlerEnter: function () {
    title.innerText = "Thank you Lynn";
    title.style.color = "#1abc9c";
  },
  superEventHandlerLeave: function () {
    title.innerText = "Thank you nicolas";
    title.style.color = "#3498db";
  },
  superEventHandlerResize: function () {
    title.innerText = "Have a nice day";
    title.style.color = "#9b59b6";
  },
  superEventHandlerRightClick: function () {
    title.innerText = "why do you click right?";
    title.style.color = "#f39c12";
  }
};
title.addEventListener("mouseenter", superEventHandler.superEventHandlerEnter);
title.addEventListener("mouseleave", superEventHandler.superEventHandlerLeave);
window.addEventListener("resize", superEventHandler.superEventHandlerResize);
window.addEventListener(
  "contextmenu",
  superEventHandler.superEventHandlerRightClick
);
-------------------------------------------------------
function clickevent(){
    const currentColor = menu.style.color;
    let newColor;
    if (currentColor === "blue") {
    newColor = "tomato";  
    } else { 
    newColor = "blue";
    }
    menu.style.color = newColor;
  };
  
  menu.addEventListener("click", clickevent)


  function clickEvent() {
    const clickedClass = "active"
    if (menu.classList.contains(clickedClass)) {
      menu.classList.remove(clickedClass);
    } else {
      menu.classList.add(clickedClass);
    } //기존의 class를 삭제하지 않고 active를 추가할 수 있는 방법"
-----------------------------------------------------------------
assignment
https://codesandbox.io/s/empty-blueprint-forked-0ekww?file=/src/index.js
    const bodyColor = document.querySelector("body");

    //이건 js파일//
function colorChange() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 800) {
    bodyColor.classList.remove("medium", "small");
    bodyColor.classList.add("large");
  } else if (viewportWidth >= 600 && viewportWidth < 800) {
    bodyColor.classList.remove("large", "small");
    bodyColor.classList.add("medium");
  } else if (viewportWidth<600) {
    bodyColor.classList.remove("medium", "large");
    bodyColor.classList.add("small");
  }
}
window.addEventListener("resize", colorChange)

//css파일//
.large {
    background-color: red;
  }
  
  .medium {
    background-color: blue;
  }
  .small {
    background-color: green;
  }
  //처음에 bodyColor.style.backgroundcolor: red; 이렇게 해서 됐었는데
  //body하나 쓰고 지우니까 갑자기 안됨. 찾아보니까 background-color로 하네...

  h1 {
    color: blue;
    transition: color 0.5s ease-in-out;
}//글자가 바뀔 때 부드럽게 바뀌는 효과

----------------------------------------------------
바닐라js 4.1-

const loginInput = document.querySelector(".login-form input")
const loginButton = document.querySelector(".login-form button")
function loginButtonEvent(){
    const username = loginInput.value;
    if (username === "") {
        alert("please write username");
    } else if (username.length > 15) {
        alert("username is too long");
    }
}
loginButton.addEventListener("click", loginButtonEvent)

//html로만 로그인 구축하기.//

<form class="login-form">
<input
required
maxlength = "10"
type="text" 
placeholder="what is your name?" 
/>
<button>log in</button>
</form>
---------------------------------
4.1~ localStorage에 저장하기 

const loginInput = document.querySelector(".login-form input")
const loginForm = document.querySelector(".login-form")
const welcome = document.querySelector("#welcome")
function loginSubmit(event){
    event.preventDefault();
    const username = loginInput.value
    loginForm.classList.add("hidden")
    console.log(username)
    welcome.innerText = username + "! welcome to visit!"
    welcome.classList.remove("hidden")    
    localStorage.setItem("username", username)
}
loginForm.addEventListener("submit", loginSubmit)

------------------------------------------
4.1~4.7 localStorage에 값이 저장되어 있으면 form 보여주지 말고 h1 보여주기
const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const welcome = document.querySelector("#welcome");
const HIDDEN_CLASSNAME = "hidden";
function loginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
  greeting(username);
}
function showForm(){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
}
function greeting(username) {
  welcome.classList.remove(HIDDEN_CLASSNAME);
  welcome.innerText = username + "! welcome to visit!";
}

const savedlocalStorage = localStorage.getItem("username");
if(savedlocalStorage === null) {
  showForm();
} else {
  greeting(savedlocalStorage);
}
------------------------------------------------
10.26 assignment 랜덤숫자 맞히는 게임
const generateInput = document.querySelector(".generateNumber input");
const guessInput = document.querySelector(".guessNumber input");
const gameForm = document.querySelector("#gameForm");
const gameInfo = document.querySelector(".gameInfo");
const won = document.querySelector(".won")
const lost = document.querySelector(".lost")
function winOrLose(event){
    const playersNumber=guessInput.value;
    event.preventDefault();
    const randomNumber = Math.round(Math.random()*generateInput.value);
    console.log(playersNumber);
    gameInfo.innerText="You chose: " + playersNumber + " the machine chose: " + randomNumber;
    gameInfo.classList.remove("hidden")
    console.log(randomNumber);
    localStorage.setItem("playersNumber", playersNumber);
    localStorage.setItem("randomNumber", randomNumber);
const playersNumberStorage = localStorage.getItem("playersNumber");
const randomNumberStorage = localStorage.getItem("randomNumber");
if (playersNumberStorage === randomNumberStorage){
    won.innerText="you won!";
    won.classList.remove("hidden");
    lost.classList.add("hidden");
} else {
    lost.classList.remove("hidden");
    won.classList.add("hidden");
    lost.innerHTML="you lost!";
}
}

gameForm.addEventListener("submit", winOrLose);

//엄청 헤맸었는데.. 음.. if문을 function 바깥에 빼서 입력했었는데 그 때는
새로고침하지 않으면 if가 작동하지 않았음. 그러니까 playersNumberStorage와 randomNumberStorage가
같아도 you won! 텍스트가 뜨지 않았다. function 내부에 넣으니까 뜸
근데 또 이게 function 내부에 넣어도 
storage에 저장한 숫자 말고 playersNumber랑 randomNumber를 비교하니까 또 안되더라

왜그런거임??

---------------------------------------------
clock 만들기
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
---------------------------------------------------
christmas 타이머

const intervalClock = setInterval(getClock, 1000);

function getClock() {
    const today = new Date();
    const dd = today.getDate();
    const hh = today.getHours();
    const mm = today.getMinutes();
    const ss = String(today.getSeconds()).padStart(2, '0');
    const today = new Date();//지금 현재 시간을 요일 / 월 / 일 / 연도 / 시 / 분/ 초 순으로 나열해줌
    const christmasEve = new Date(2021, 11, 24); //목표 시간
    const distance = christmasEve - today; // 위의 두 개를 빼면 밀리 세컨드 단위로 시간의 차이가 나온다.
    const dd = Math.floor(distance/(1000*60*60*24)); // 시간단위에서 24를 더 나눠주면 일자가 나온다.
    const hh = Math.floor(distance/(1000*60*60)%24);// distance/(1000*60)(분단위)에서 60을 더 나눠주면 시간단위가 됨
    const mm = Math.floor(distance/(1000*60)%60); // distance/1000(초단위)에서 60을 더 나눠주면 분단위가 됨.
    const ss = Math.floor(String(distance/(1000)%60).padStart(2, '0'));// distance는 단위가 밀리세컨드기 때문에 1000을 나눠주면 초단위가 됨
    clock.innerHTML = dd + "d : " + hh + "h : " + mm + "m : " + ss + "s"
}
---------------------------------------------------------
timer 만드는 다른 방법

일단 크리스마스 시간 설정
const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);

--------------------------------------------------------
d-day 계산기
const clock = document.querySelector("#clock");
const inputDate = document.querySelector("#clock-form input")
const clockForm = document.querySelector("#clock-form")
const inputDateInfo = document.querySelector("#clock-form .inputDateInfo")
function getClock(event) {
    event.preventDefault();//이거 넣으면 출력을 눌러 submit을 해야 동작이 되고 이거 안넣으면 날짜 선택하자마자 동작됨
    const today = new Date();//지금 현재 시간을 요일 / 월 / 일 / 연도 / 시 / 분/ 초 순으로 나열해줌
    const Dday = inputDate.valueAsDate; //목표 시간
    const distance = Dday - today; // 위의 두 개를 빼면 밀리 세컨드 단위로 시간의 차이가 나온다.
    const dd = Math.floor(distance/(1000*60*60*24)); // 시간단위에서 24를 더 나눠주면 일자가 나온다.    
    clock.innerHTML ="기준일로부터 " + dd + "일 남았습니다 ";
    inputDateInfo.innerHTML = "lala" // input창에
    if(inputDate.valueAsDate!==null) {  //!==이라고 해야 작동함. !=하면 안됨
        clock.classList.remove("hidden"); //홈페이지 시작할 때 숨겨놨다가 이용자가 날짜 클릭하면 보여주기 위함 
    } else {
        clock.classList.add("hidden");
    }
}
clockForm.addEventListener("submit", getClock);

-----------------------------------------------------------------------
const colorChangeButton = document.querySelector("#colorChangeButton");
const chosenColors = [];
function onClick(event) {
    const colors = [  //ㅠㅠㅠㅠㅠㅠㅠㅠ미친 colors function 안에 넣기 전에는
        "#ef5777",    // submit해도 초기화가 안돼서 F5 계속 눌렀어야했는데
        "#575fcf",    // 함수 안에 넣으니까 바로 되네 ㅠㅠㅠ뭐임...?대체 왜그런거야
        "#4bcffa",
        "#34e7e4",
        "#0be881",
        "#f53b57",
        "#3c40c6",
        "#0fbcf9",
        "#00d8d6",
        "#05c46b",
        "#ffc048",
        "#ffdd59",
        "#ff5e57",
        "#d2dae2",
        "#485460",
        "#ffa801",
        "#ffd32a",
        "#ff3f34"
      ];
    event.preventDefault();
    event.preventDefault();
    while(colors.length>2){//조건문이 참이면 계속 while 안의 코드를 반복실행
                            //colors.length가 2가 되면 멈춘다.
        const randomNumber = Math.floor(Math.random()*colors.length) //일단 배열의 length보다는 작은 숫자 랜덤으로 뽑는 코드
        const randomColors = colors.splice(randomNumber,1)[0];
        //array.splice(n, m)이 의미하는 것은 array로 선언한 배열 속에서 n번째 값부터 m개를 배열로 추출
        //지금은 colors 배열에서 randomNumber로 나온 숫자 만큼의 위치에 있는 1개의 값을 추출(배열임)
        //만약 randomNumber,2 였다면 2개의 값을 배열로 추출하게 됨.
        //그래서 colors.splice(randomNumber,1)[0]; 이렇게 뒤에 [0]을 붙여주는 거임
        //배열의 첫번째 숫자를 추출하라는 의미
        chosenColors.push(randomColors);
        //구글링해서 찾아봤을 때 push를 ranomColrs로 해주라는데 이유를 모르겠다.
        //colors배열에서 2개를 제거하고 16개씩 추가가 되는데?
        //아무튼 이 코드는 없어도 됨..
        //그래서 사실은 위의 chosenColrs도 없어도 됨..
    }
console.log(chosenColors)
document.body.style.background = `linear-gradient(to right, ${colors[0]},${colors[1]})`;
}
colorChangeButton.addEventListener("submit", onClick);

//이건 재귀함수
//const a = Math.floor(Math.random()*colors.length
//const b = Math.floor(Math.random()*colors.length
//if ( a === b) {
//return onClick();
//}
---------------------------------------------------------------
#7.1~ todo.js 만들기
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input")

const setTodo = []; //todo list를 push할 array. 
function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(setTodo)); //#7.3 setTodo에 push된 값들을 텍스트형태로 storage에 저장함
}

function removeTodo(event){ //✖️버튼 클릭하면 리스트에서 제거하는 함수
    const removeLi = event.target.parentElement;//버튼을 클릭하면 어떤 버튼이 클릭됐는지 인식하도록 만들어줘야한다.
    removeLi.remove();                   //함수의 인자에 event를 넣어서 console.log하면 path에 경로가 나옴.
}

function addList(todoInputValue){ //todoInput.value를 리스트에 추가해주는 함수
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "✖️" //#7.2 이모지사용 : 단축키는 window키와 .(마침표키)
    li.appendChild(span); //Child에 C가 대문자인 것 조심할 것.. li에 span을 추가
    li.appendChild(button);//#7.2 li에 button추가
    span.innerHTML = todoInputValue; //왜 innerText 하면 안되지?
    button.addEventListener("click", removeTodo);//#7.2 버튼 클릭하면 함수실행
    console.log(li);
    todoList.appendChild(li);//li를 todoList에 추가 todoList는 html에 있는 Ul임
}

function handleToDoSubmit(event) {
    event.preventDefault(); //input에 text입력하고 엔터를 눌러도 새로고침 안되도록 설정
    const todoInputValue = todoInput.value;
    //console.log(todoInputValue); // 아래의 todoInput.value="";에 의해 영향을 받지 않음
    todoInput.value=""; // text입력 후 submit되면 칸이 비워지도록 함.
    //console.log(todoInput.value); //이 값은 비워짐.
    addList(todoInputValue); //#7.1 위의 함수를 여기다 추가시켜줌.
    setTodo.push(todoInputValue);//#7.3 input에 입력된 값들을 setTodo의 배열에 넣어준다.
    saveTodo();//#7.3
}

todoForm.addEventListener("submit", handleToDoSubmit);

const getTodo = localStorage.getItem("todos");
console.log(getTodo); // string으로 출력됨
if(getTodo !== null){
    const parsedTodos = JSON.parse(getTodo); // getTodo를 배열로 바꿔줌
    console.log(parsedTodos); // 배열로 출력된다.
    parsedTodos.forEach(addList);
}