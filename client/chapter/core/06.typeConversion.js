/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
let year = 2022;
const YEAR = 2022;
console.log(year, YEAR);
console.log(String(year), typeof String(year));

// undefined -> 'undefined', null
let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));
console.log(isKind + '');
console.log(typeof (isKind + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log('Number(undefined) = ', Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0
let why = true;
console.log(why * 1);
console.log(typeof (why * 1)); // 곱하기 1 하면 형변환(숫자로)
console.log(typeof (why / 1)); // 나누기 1 하면 형변환(숫자로)

// string 숫자형 문자
let num = '   123'
console.log(num * 1);
console.log(typeof(num * 1));

// numeric string
let width = '320px'
console.log(Number(width)); // NaN
console.log(parseInt(width));
console.log(typeof(parseInt(width)));

let width_ = '        32.111111111111111111111111       px'
console.log(parseFloat(width_,10));
console.log(parseFloat(width_));
console.log(typeof(parseFloat(width_,10)));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들 

console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
// console.log(Boolean(!!null));
// console.log(Boolean(!!' '));
// console.log(Boolean(!!''));