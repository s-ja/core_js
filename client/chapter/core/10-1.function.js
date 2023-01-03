/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// let total;

// 함수 선언
// function calcPrice(priceA,priceB,priceC,priceD){
//     // return priceA+priceB+priceC+priceD;
//     let total = priceA+priceB+priceC+priceD;
//     return total;
// }

/* 디폴트 안한거
function calcPrice(a, b, c, d) {
  !c ? (c = 0) : "";
  !d ? (d = 0) : "";

  return a + b + c + d;
}

let result = calcPrice(100, 5023);
console.log(result);
*/

function getRandomValue(){
    // 비어있는 값에 0 아니면 1 을 넣는 함수.
    // return Math.random() > 0.5 ? 1 : 0;

    if(Math.random() > 0.5){
        return 1
    }else{
        return 0
    }
}

function calcPrice( //함수 선언
    priceA= 0, //매개 변수
    priceB= 0,
    // priceC= 0,
    priceC= getRandomValue(),
    priceD = 0 //? -> Validation?
    ){
        // if(!priceD){
        //     priceD = 0;
        // }
        // if(!priceC){
        //     priceC = 0;
        // } //? -> default parameter?

        if(!priceA || !priceB){
            throw new Error('calcPrice 함수의 첫 번째 인수와 두 번째 인수는 필수 입니다.')
            // throw new SyntaxError('calcPrice 함수의 첫 번째 인수는 필수 입니다.')
            // throw new TypeError('calcPrice 함수의 첫 번째 인수는 필수 입니다.')
        }

        let total = priceA+priceB+priceC+priceD;
    return total; //함수 값 변환
}

let result = calcPrice(1234,1234,35,567,1234,1243) //함수 호출

console.log(result);
// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

//! 1. 하나의 기능만을 수행해야 한다. (관심사의 분리)
//! 2. 읽었을 때 바로 기능을 알 수 있게끔. (이름과 매개변수의 이름을 직관적으로 적어야 함.)
//! 3. 재사용성이 좋아야 함

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

/*
 1. funtion name
 2. validation
 3. return value
 4. parameter, argument
 5. test [Test Driven Development]  =/= CDD(component driven development) =/= JDD(?ㅋㅋㅋ)
 */

// rem(pxValue: number|string, base: number):string;
// let rem;

function rem(pxValue, base=16){
    // let rem = parseInt(pxValue) / base;
    // return rem+'rem';

    typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10))
    // if(typeof pxValue === 'string'){
        //     pxValue = parseInt(pxValue,10)
        // }
        
    typeof base === 'string' && (base = parseInt(pxValue,10))
    // if(typeof base === 'string'){
        //     base = parseInt(base,10)
        // }

    return `${pxValue / base}rem`;
}

console.assert(rem(20) === '1.25rem') //! TDD

//rem(20); // 1.25rem
console.log(rem(20));
//rem('30px'); // 1.875rem
console.log(rem('30px'));
//rem('56px',10); // 5.6rem
console.log(rem('56px',10));

// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.