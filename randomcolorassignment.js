const colorChangeButton = document.querySelector("#colorChangeButton");
const chosenColors = []; //추출된 값을 추가할 배열을 만들어 놓는다. 빈 배열임
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
    while(colors.length>2){//조건문이 참이면 계속 while 안의 코드를 반복실행
                            //colors.length가 2가 되면 멈춘다.
        const randomNumber = Math.floor(Math.random()*colors.length) //일단 배열의 length보다는 작은 숫자 랜덤으로 뽑는 코드
        const randomColors = colors.splice(randomNumber,1)[0];
        //array.splice(n, m)이 의미하는 것은 array로 선언한 배열 속에서 n번째 값부터 m개를 배열로 추출
        //지금은 colors 배열에서 randomNumber로 나온 숫자 만큼의 위치에 있는 1개의 값을 추출(배열임)
        //만약 randomNumber,2 였다면 2개의 값을 배열로 추출하게 됨.
        //그래서 colors.splice(randomNumber,1)[0]; 이렇게 뒤에 [0]을 붙여주는 거임
        //배열의 첫번째 숫자를 추출하라는 의미
        chosenColors.push(randomColors);
        //구글링해서 찾아봤을 때 push를 ranomColrs로 해주라는데 이유를 모르겠다.
        //colors배열에서 2개를 제거하고 16개씩 추가가 되는데?
        //아무튼 이 코드는 없어도 됨..
        //그래서 사실은 위의 chosenColrs도 없어도 됨..
    }

console.log(colors)
//document.body.style.background = `linear-gradient(to right, ${colors[0]},${colors[1]})`;
document.body.style.background = "linear-gradient(to right," + colors[0] + "," + colors[1] + ")";
}
colorChangeButton.addEventListener("submit", onClick);