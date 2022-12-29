/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = prompt("더할 첫번째 숫자", 1)
let secondValue = prompt("더할 두번째 숫자", 2)
console.log(typeof(firstValue));
console.log(typeof(secondValue));
console.log('first attempt',firstValue + secondValue); //! '문자열'+'문자열' -> ex)12
// alert(firstValue + secondValue); //! '문자열'+'문자열' -> ex)12

let numFirstValue = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1));
let numSecondValue = Number(prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2));
console.log('numFirstValue+numSecondValue = ',numFirstValue+numSecondValue);


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자 -> 피연산자 갯수가 1개
let unary;
console.log(+a);
console.log(-a);

// 이항 연산자 -> 피연산자 갯수가 2개
let binary;
console.log(a+b);
console.log(a-b);

// 삼항 연산자 -> 피연산자 갯수가 3개
let ternary;

console.log( a > b ? 'A is bigger' : 'B is bigger');
console.log(Math.random() > 1 ? '1보다 큰 난수' : '1보다 작은 난수')

let ternary_ = Math.random() > 0.5 ? '' : ''

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 3;

// 산술 연산자: 곱셈
let multiplication;

// 산술 연산자: 나눗셈
let division = 10 / 5;

// 산술 연산자: 나머지
let remainder = 10 % 5;

// 산술 연산자: 거듭 제곱
let power = 2 ** 5; 


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
console.log(onlyWorkDefaultValues);
let newArray = [4,5,6].concat([7,8,9])
console.log(newArray);

let firstArray = [1,2,3]
let secondArray = [4,5,6]

//*전개 연산자 spread Operator -> 전부 풀어 해쳐서 다시 새로운 배열에 담는다.
let new_array = [... firstArray, ...secondArray]
console.log(new_array);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let number = 100;

// 선,후 증감 연산자
// ++, --

console.log('number',number);
console.log('number++',number++);
console.log('number',number);
console.log('++number',++number);
console.log('number',number);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
//! 2*5+(5**3) = 135
console.log(total);
let expected = 10000;
console.log(expected);
let _1st = count%4
let _2nd = count /= 2
let _3rd = count ** 3
console.log(_1st,'*',_2nd,'+',_3rd,'=',_1st*_2nd+_3rd);

// "" + 1 + 0 = "1" //!-> "10"
// "" - 1 + 0 = "1" //!-> -1
// true + false = 1 //!-> 1
// 6 / "3" = NaN //!-> 2
// "2" * "3" = NaN //!-> 6
// 4 + 5 + "px" = "45px" //!-> 9px
// "$" + 4 + 5 = "$9" //!-> "$45"
// "4" - 2 = 2 //!-> 2
// "4px" - 2 = NaN //!-> NaN
// 7 / 0 = 0 //!-> infinity
// "  -9  " + 5 =  //!-> "-95"
// "  -9  " - 5 //!-> -14
// null + 1 //!-> 1
// undefined + 1 //!-> NaN
// " \t \n" - 2 //!-> -2