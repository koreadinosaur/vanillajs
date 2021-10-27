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