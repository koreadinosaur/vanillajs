const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const welcome = document.querySelector("#welcome");
const HIDDEN_CLASSNAME = "hidden";
function loginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    greeting(user);
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