const images = ["Busan.jpg","Chunggyecheon.jpg","Hanok.jpg"];
const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");
bgImages.src = "/vanillajs/img/" + chosenImages;
// `/vanillajs/img/${chosenImages}`; // 탬플릿 리터럴

document.body.appendChild(bgImages) //prepend는 앞에 추가하는 것.