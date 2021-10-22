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