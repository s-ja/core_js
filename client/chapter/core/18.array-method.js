/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [11,22,33,44,55]
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(Array.isArray({}));
console.log(Array.isArray('  '));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));

function isArray(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowercase() === 'array'
}
function isNull(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowercase() === 'null'
}
console.log(Array.isArray([]));

/* 요소 순환 -------------------------------------------------------------- */

// forEach

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join