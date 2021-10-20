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
