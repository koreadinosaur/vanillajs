const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input")

function addList(todoInputValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); //Child에 C가 대문자인 것 조심할 것..
    span.innerHTML = todoInputValue; //왜 innerText 하면 안되지?
    console.log(li);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //input에 text입력하고 엔터를 눌러도 새로고침 안되도록 설정
    const todoInputValue = todoInput.value;
    console.log(todoInputValue); // 아래의 todoInput.value="";에 의해 영향을 받지 않음
    todoInput.value=""; // text입력 후 submit되면 칸이 비워지도록 함.
    console.log(todoInput.value); //이 값은 비워짐.
    addList(todoInputValue); //#7.1 위의 함수를 여기다 추가시켜줌.
}

todoForm.addEventListener("submit", handleToDoSubmit)