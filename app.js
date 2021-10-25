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