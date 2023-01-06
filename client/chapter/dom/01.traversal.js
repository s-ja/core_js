/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

//!/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


let span = document.querySelectorAll('span')

//let first = document.querySelector('.first')

//let first = span[0]
//let second = span[1]

// let [first,second,third] = document.querySelectorAll('span')


// console.log(first);
// console.log(span);


for(let keyValue of Object.entries(Object)){

    let key = keyValue[0];
    let value = keyValue[1];

}

// let classNumber = prompt('span number','1 to 3')
let classNumber = 3

// function getNode(classNumber){
//     if(classNumber == 1){
//         return first
//     }else if(classNumber == 2){
//         return second
//     }else{
//         return third
//     }
// }

// console.log(getNode(classNumber))

// function _getNode(node){
//     if(typeof node !== 'string'){
//         throw new Error('_getNode 함수의 인자는 문자타입어야 합니다.')
//     }
//     return document.querySelector(node)
// }

// console.log(getNode('.first'));

/* 문서 대상 확인 */
// - matches

console.log(getNode('.first').matches('.first'));


let first = getNode(".first");

let clicked = false;
document.addEventListener("click", () => {
  if (first.classList.contains("first") && !clicked) {
    first.classList.add("is-active");
  } else {
    first.classList.remove("is-active");
  }
  clicked = !clicked;
});


/*
? - matches
 * 선택자 안에 class || id 를 가지고 있는 대상이 있어?
console.log(getNode(".first").matches(".first"));

? - contains
 * 선택자의 자식들 중에 해당 element 가 있어?
console.log(getNode("h1").contains(getNode(".first")));
*/



// - contains