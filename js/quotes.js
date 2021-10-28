const sentence = document.querySelector("#quote span:first-child");
const athor = document.querySelector("#quote span:last-child");

const quote =[
    {
quote: "소리에 놀라지 않는 사자처럼, 그물에 걸리지 않는 바람처럼, 진흙에 물들지 않는 연꽃처럼, 무소의 뿔처럼 혼자서 가라",
athor: "숫타니파타",
    },
    {
quote: "모든 일에 있어서 시간이 부족하지 않을까를 걱정하지 말고 내가 마음을 바쳐 최선을 다할 수 있을지, 그것을 걱정하라",
athor: "조선 22대 임금 정조",
    },
    {
quote: "그대의 자질은 아름답다. 그런 자질을 가지고 아무것도 하지 않겠다 해도 뭐라 할 수는 없지만, 그대가 만약 온 망므과 힘을 다해 노력한다면 무슨 일인들 해내지 못하겠는가",
athor: "조선 4대 임금 세종",
    },
    {
quote: "일생의 계획은 어릴 때에 있고, 일년의 계힉은 봄에 있고, 하루의 계획은 새벽에 있다",
athor: "명심보감",
    },
    {
quote: "Stay hungry, Stay Foolish",
athor: "Steve Jobs",
    },
    {
quote: "죽는 날까지 하늘을 우러러 한점 부끄럼이 없기를 잎새에 이는 바람에도 나는 괴로워했다",
athor: "윤동주 서시 中",
    },
    {
quote: "이봐, 해봤어?",
athor: "정주영",
    },
    {
quote: "모든 민주주의에서 국민은 그들의 수준에 맞는 정부를 가진다",
athor:  "알렉시스 드 토크빌",
    },
    {
quote: "우리 헌정사에 공소시효에 관한 진정소급입법을 단 한번 예외적으로 허용한다면 바로 이러한 경우에 허용되어야 한다고 할 것이다",
athor: "5.18민주화운동등에관한특별법 위헌제청심판",
    },

]


const todaysQuote = quote[Math.floor(Math.random()*quote.length)];
sentence.innerHTML = todaysQuote.quote;
athor.innerHTML = todaysQuote.athor;