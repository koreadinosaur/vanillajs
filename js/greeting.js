const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const welcome = document.querySelector("#welcome");
function loginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    greeting(username);
}
function showForm(){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginSubmit);
  }
  function greeting(username) {
    welcome.classList.remove("hidden");
    welcome.innerText = username + "! welcome to visit!";

  }
  const savedlocalStorage = localStorage.getItem("username");

if(savedlocalStorage === null) {
showForm();
} else {
greeting(savedlocalStorage);
}