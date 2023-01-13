// const { getNode } = require("./lib");

// import { getNode } from "./lib/dom/getNode.js";
import { getInputValue, getNode, getRandom, insertLast, clearContents } from "./lib/index.js";


import { jujeobData } from "./data/data.js";

// console.log('God Speed To You')
// console.log(window);

// log+tab
// .log [extension : https://marketplace.visualstudio.com/items?itemName=jaluik.dot-log]


// *npm install [-D / -G / nothing] => 'devDependencies'
// *프로젝트 자체에 삽입하는 것인가 아닌가의 차이 / 사용자가 받아봐야 하는가 아닌가
// dependencies 에는 애플리케이션 동작과 연관된,
// devDependencies 에는 애플리케이션 동작과 직접적인 연관은 없지만, 이름 그대로 개발할 때 필요한 라이브러리를 설치
// 이렇게 구분해주는 이유는 결국 배포할 때 어떤 라이브러리가 포함되냐
// dependencies 에 설치된 라이브러리는 배포할 때 포함되지만
// devDependencies 에 설치된 라이브러리는 개발할 때 필요한 라이브러리기 때문에 배포할 때 포함되지는 X

// npm i gsap : 웹사이트에서 애니메이션을 쉽게 볼수있게 해주는 애.
// gsap은 실제 사용자가봣을때 필요한 요소인가? 예. 움직임을 해주는것 을 gspa 자체가 해주는거라서. 그럼 devdependencies가 아니라 실제 프로덕트 내 배포가 가능한 dependencies로 해야한다. 실제로 안필요하면 devdependencies.

// *다른 사람의 프로젝트를 받아오고 나면 가장 먼저 npm install 부터 할것!
// package.json 의 기록을 토대로 필요한 노드 패키지들을 다운함.


const submit = getNode('#submit')
let resultArea = getNode('.result')

console.log(submit);


function clickSubmitHandler(e){
    
    e.preventDefault();
    
    let name = getInputValue('#nameField');

    // console.log(name);

    let list = jujeobData(name)

    let pick = list[getRandom(list.length-1)]

    clearContents(resultArea)
    insertLast(resultArea,pick)
}


submit.addEventListener('click',clickSubmitHandler)