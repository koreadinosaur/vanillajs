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
if (parseInt(playersNumber) === parseInt(randomNumber)){
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