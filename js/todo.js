const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input")

let setTodo = []; //todo list를 push할 array. const대신 let을 써서 업데이트 가능하도록.
function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(setTodo)); //#7.3 setTodo에 push된 값들을 텍스트형태로 storage에 저장함
}

function removeTodo(event){ //✖️버튼 클릭하면 리스트에서 제거하는 함수
    const removeLi = event.target.parentElement;//버튼을 클릭하면 어떤 버튼이 클릭됐는지 인식하도록 만들어줘야한다.
    //console.log(removeLi.id)//#7.6 ✖️누른 버튼의 li id를 알 수 있음
    removeLi.remove();                   //함수의 인자에 event를 넣어서 console.log하면 path에 경로가 나옴.
    setTodo = setTodo.filter((todoInputValueObj) => parseInt(removeLi.id) !== todoInputValueObj.id);
    //todoInputValueObj내의 id는 string이 아니라 number다.
    //removeLi의 id는 string이다. saveTodo내의 함수인 JSON.strigigy에 의해 string이 되었기 때문.
    //그래서 여기서 parseInt를 이용해서 removeLi의 id를 number로 바꿔준 것.
    saveTodo(); //saveTodo까지 해주지 않으면 새로고침하면 지웠던게 다시 그대로 생김.
}

function addList(todoInputValueObj){ //todoInput.value를 리스트에 추가해주는 함수
    const li = document.createElement("li");
    li.id = todoInputValueObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "완료" //#7.2 이모지사용 : 단축키는 window키와 .(마침표키)
    li.appendChild(span); //Child에 C가 대문자인 것 조심할 것.. li에 span을 추가
    li.appendChild(button);//#7.2 li에 button추가
    span.innerHTML = todoInputValueObj.text; //왜 innerText 하면 안되지?
    button.addEventListener("click", removeTodo);//#7.2 버튼 클릭하면 함수실행
    todoList.appendChild(li);//li를 todoList에 추가 todoList는 html에 있는 Ul임
}

function handleToDoSubmit(event) {
    event.preventDefault(); //input에 text입력하고 엔터를 눌러도 새로고침 안되도록 설정
    const todoInputValue = todoInput.value;
    //console.log(todoInputValue); // 아래의 todoInput.value="";에 의해 영향을 받지 않음
    const todoInputValueObj = {//#7.6 localStorage에 text대신 object를 부여
        text: todoInputValue,
        id: Date.now(),//현재시간 밀리세컨드로 표시.(랜덤숫자 부여)
    }
    todoInput.value=""; // text입력 후 submit되면 칸이 비워지도록 함.
    //console.log(todoInput.value); //이 값은 비워짐.
    addList(todoInputValueObj); //#7.1 위의 함수를 여기다 추가시켜줌.
    setTodo.push(todoInputValueObj);//#7.3 input에 입력된 값들을 setTodo의 배열에 넣어준다. //#7.6 .text넣으면 오류난다.
    saveTodo();//#7.3
}

todoForm.addEventListener("submit", handleToDoSubmit);

const getTodo = localStorage.getItem("todos");
console.log(getTodo); // string으로 출력됨
if(getTodo !== null){
    const parsedTodos = JSON.parse(getTodo); // getTodo를 배열로 바꿔줌
    parsedTodos.forEach(addList);
    setTodo = parsedTodos;//#7.5 localStorage가 덮어씌워지지않도록 막아줌
}