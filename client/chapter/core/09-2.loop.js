/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

//! 조건에 맞지 않아도 무조건 do로 인해서 한번은 실행이 됨
let i = 10;

do{
    // console.log('first');
    // console.log(i);
    i++;
}while(i < 5)
// }while(false)


const frontEndDev = [
    'HTML',
    'CSS',
    'SVG',
    'JavaScript',
    'jQuery',
    'React',
    'Redux',
  ];
  
  
  // do ~ while 문 (역순환)
  // - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
  // - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
  // - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
  //   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
  // - 순환 중단

// let count = prompt('순환할 횟수를 입력하시오','10')

// do{
//     console.log(count);

//     if(count =< 0 || !count){
//         console.log('first');
//         break;
//     }
    
//     count--;
// }while(count)

// do{
//     console.log(count-(count-1));
//     count++
// }while(count)
  
  // do ~ while 문 (순환)
  // - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

console.log(first);
// console.log(first.nextSibling);

function next(node){
    do{
        node = node.nextSibling;
    }while(node.nodeType !== document.ELEMENT_NODE)

    // return(console.log(node);)
    return node;
}

function prev(node) {
    do {
      node = node.previousSibling;
    } while(node.nodeType !== document.ELEMENT_NODE);
    return node;
}

// prev(second)

console.log(first);

console.log(next(first)) //-> second == first's next element node
console.log(next(second)) //-> second == first's next element node
console.log(next(third)) //-> second == first's next element node
// next(first)

console.log(prev(first)) //-> second == first's prev element node
console.log(prev(second)) //-> second == first's prev element node
console.log(prev(third)) //-> second == first's prev element node
