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
  
  console.log(resultX);
  console.log(resultY);
  console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
  let calculateTotal;
  
  
  // 익명(이름이 없는) 함수 (표현)식
  let anonymousFunctionExpression;
  
  
  // 유명(이름을 가진) 함수 (표현)식
  let namedFunctionExpression;
  
  
  // 콜백 함수 (표현)식
  let callbackFunctionExpression;
  
  
  // 함수 선언문 vs. 함수 (표현)식
  
  
  // 즉시 실행 함수 (표현)식
  // Immediately Invoked Function Expression
  let IIFE;
  
  //? 네이티브(alert, prompt 등)은 편집이나 수정이 불가능하다!.