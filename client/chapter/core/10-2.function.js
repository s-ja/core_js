/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


/*

?문: 값을 반환 x / 식: 값을 반환 o
if 문 if ... { // scope }
for 문 for ... {}
while 문 while ... {}
dowhile 문 do 

함수선언 문
let result = condition ? value1 : value2
let result = value1 || value2
let result = value1 && value2

*/

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calcTotal(10000, 8900, 1360, 2100);
  let resultY = calcTotal(21500, 3200, 9800, 4700);
  let resultZ = calcTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
//   let calculateTotal;
  let calculateTotal = function(moneyA,moneyB,moneyC,moneyD){

    // console.log(arguments) //? 기능: 인수로 받은 모든 값들을 '유사배열'안에 담는다.
    //! 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수 : arguments
    //! arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.

    //! 유사배열은 배열이 아님, 고로 배열의 능력을 사용하려면 '진짜'배열로 만들어야 함.
    //! 배열의 능력 : forEach,reduce
    //? 파라미터로 전달하는 모든 함수는 callback (?)

    // for(let i =0,i < arguments.length, i++){
    //     total += arguments[i];
    // }

    let total = 0;
    // for(let value of arguments){
    //     total += value;
    // }
    
    let arr = Array.from(arguments); //static method
    // let arr = Array.prototype.slice.call(arguments); // instance method

    // console.log(arr);

    // arr.forEach(function(item,index){ //!순서 중요, 아이템 앞 인덱스 뒤(?)
    //     // console.log(item);
    //     // console.log(index);
    //     console.log(index,item);
    //     total += item;
    // })
    
    // return moneyA+moneyB+moneyC+moneyD;

    // return total;

    return arr.reduce(function (acc,item){ //!누적값과 현재값(?)
        return acc + item
    })
  };

  console.log(calculateTotal(111,222,333,444,555,666,777,888,999,1000));

  // 익명(이름이 없는) 함수 (표현)식
//   let anonymousFunctionExpression;
  let anonymousFunctionExpression = function(){};
  
  
  // 유명(이름을 가진) 함수 (표현)식
//   let namedFunctionExpression;
  let namedFunctionExpression = function hello(){};

//   hello(); ->!error
// console.dir(namedFunctionExpression)
  
// 콜백 함수 (표현)식
let callbackFunctionExpression = function(url,resolve,reject){ //!callback방식 =/= closer방식

// if(typeof url==='string' && url.includes('http') && url.includes('www')){
if(typeof url === 'string' && url.match(/http.+www/)){
resolve(url)
}else{
reject()
}

};

callbackFunctionExpression(
prompt(),
function(url){
    console.log(`${url} 해당 페이지로 이동합니다.`);
},
function(){
    console.log('url 입력 정보가 올바르지 않습니다.');
}
);
//? forEach는 내부에 이런 식으로 구현되어 있을려나요? forEach(function(){}, currentValue, index, array, thisArg){} (?)
// * forEach 는 내부에 이런 식으로 구현되어 있을려나요 ? - 노지원님 질문-
//  forEach(function(currentValue, index, array){}, thisArg)
//  arr.forEach(function(item, index){})


// 함수 선언문 vs. 함수 (표현)식

function aa(){}

const bb = function(){} //함수 자체가 호이스팅 되지는 않음, 변수가 호이스팅 됨.

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 즉시 호출될 수 있는 함수의 표현식(?)



let IIFE;

//   var => 무조건 전역을 오염시킴, 하지만 함수 스코프 안에 넣는다면?
//   var 함수 스코프
//   let,const 블록 스코프

// 모듈 프로그래밍의 개념 : 모듈 프로그래밍으로 인해 아래 코드는 잘 사용하지 않게 되었음.

(function(){
    console.log('why?');
})() //?디자인 패턴의 하나 : 전역을 보호하기 위해


// (function($){

//     console.log($);
    
// })(window)

const MASTER = (function ($) {
    // parameter
    const KEY = "alcls@#@!$%";
  
    // 내가 내보내고 싶은 항목들만 내보낼꺼야
    // 모듈로서의 활용
    // 정보 은닉화 incapsulation : 외부의 접근을 차단
    // 일부 정보만 노출
  
    // console.log($(".first"));
  
    return {
      getKey: function () {
        return KEY;
      },
    };
  })(getNode); // arguments
  
  function getNode(node) {
    return document.querySelector(node);
  }
  
  console.log(MASTER.getKey());
  

//? 네이티브(alert, prompt 등)은 편집이나 수정이 불가능하다!.