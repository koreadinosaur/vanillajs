const API_KEY = "42989711d4460f2284dadd91731935a6"; //openweathermap 에서 로그인 후 키를 얻는다.
function geoSucess(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //openweathermap에서 API -> current weather Data항목에서 api doc클릭
    //-> By geographic coordinates에서 API call을 복사해서 url에 붙여넣는다.
    //거기다 내 위도, 경도, api key 입력하면 내 위치정보 뜬다.
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        weather.innerHTML = `${data.weather[0].main}, ${data.main.temp}℃`;
        city.innerHTML = data.name;
    });
}
function geoError(){
    alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(geoSucess, geoError);
