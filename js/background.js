const images = ["sunsetBusan.jpg","Busan.jpg","Hanok.jpg"];
const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");
bgImages.src = "/todolist/img/" + chosenImages;
// `/todolist/img/${chosenImages}`; // 탬플릿 리터럴

document.body.appendChild(bgImages); //prepend는 앞에 추가하는 것.