const colorChangeButton = document.querySelector("#colorChangeButton");
const chosenColors = [];
function onClick(event) {
    const colors = [
        "#ef5777",
        "#575fcf",
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
    while(colors.length>2){
        const randomColors = colors.splice(Math.floor(Math.random()*colors.length),1)[0];
        chosenColors.push(randomColors);        
    }
console.log(chosenColors)
document.body.style.background = `linear-gradient(to right, ${colors[0]},${colors[1]})`;
}
colorChangeButton.addEventListener("submit", onClick);