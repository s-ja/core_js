import { xhrData,insertLast, xhrPromise, tiger, delayP } from "./lib/index.js";



// async function render(){

    
//     await delayP(2000);
//     let response =  await tiger.get('https://jsonplaceholder.typicode.com/users/1')
//     console.log(response.data);
// }

// console.log(render());




// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     insertLast(document.body,JSON.stringify(res));
// }).catch((err)=>{
//     console.log(err);
// })


// xhrData.get(
//     'https://jsonplaceholder.typicode.com/users/1',
//     (res) => {
//         console.log(res);
//         insertLast('body',JSON.stringify(res))
//     },
//     (err) => {
//         console.log(err);
//         insertLast('body','데이터 로딩에 실패했습니다.')
//     }
// )

// 얘는 스코프가 없기 때문에 이렇게 적용되는게 맞음

// let num = 0;
// console.log('초기 값', num); // 0

// const test = () => num++;

// console.log('함수호출 전', num); // 0

// test() // 호출!! -> 전역변수 num 값이 변경됨 

// console.log('함수호출 후', num); // 1로 변경

// // 

// console.log('숫자4 할당 전', num); // 1

// num = 4;

// console.log('숫자4 할당 후', num); // 4


/* -------------------------------------- */


// const handleRollginDice = ((e) => {
//     let stopAnimation = null;
//     let isRolling = false; // <- 실제로 값이 바뀜 클로저이기 때문에 isRolling에 접근이 가능한것 , 만약 isRolling을 클로저안에 넣으면 재할당되기 때문에 변경이 안됨
//     console.log('초기 값', isRolling); // false,  <- 얘가 바뀌는건지 값이 재할당된 값이 위로 올라가는건지?? 실제로 루프가 일어남

//     return () => {
//         console.log('반환함수 위',isRolling); // false 

//         isRolling = !isRolling; // 계속 boolean값을 반전시켜서 toggle기능을 구현

//         console.log("값 변경 후 재할당", isRolling); // true
//     };
// })
  
// document.querySelector('h1').addEventListener('click', handleRollginDice())