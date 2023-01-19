/* global gsap */

// gsap.registerPlugin

// import { insertLast, tiger, delayP, $, renderUserCard, changeColor, renderSpinner, renderEmptyCard } from "./lib/index.js";

import {
    tiger,
    delayP,
    getNode as $,
    insertLast,
    changeColor,
    renderSpinner,
    renderUserCard,
    renderEmptyCard,
    attr
  } from './lib/index.js';



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










//? function rendingUserList

//? ajax get user list - https://jsonplaceholder.typicode.com/users
//? 유저카드 생성
//? 생성된 카드로 렌더링




//? 1. userList.js 로 간다
//? 2. renderUserCard 함수를 만들기
//? 3. 만들어진 함수 안에 createUserCard 를 던지고,
//? 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록


const userCardContainer = $('.user-card-inner')


async function rendingUserList(){

    
    await delayP(2000);
    let response =  await tiger.get('https://jsonplaceholder.typicode.com/user')
    console.log(response.data);
}

// console.log(rendingUserList());

// console.log(tiger.get('https://jsonplaceholder.typicode.com/users'))

async function rendingUserList_(){
    
    renderSpinner(userCardContainer)

    try{

        await delayP(2000)

        $('.loadingSpinner').remove();
        
        // tiger.get('https://jsonplaceholder.typicode.com/users').then((res)=>{console.log(res);})
        let response = await tiger.get('https://jsonplaceholder.typicode.com/users')

        let userData = response.data;
        console.log(userData);
        
        // console.log(createUserCard(userData))
        
        // renderUserCard();
        
        // insertLast(userCardContainer,createUserCard(userData));
        
        userData.forEach(data=> renderUserCard(userCardContainer, data))
        
        
        // console.log(gsap.utils.toArray('.user-card'))
        
        changeColor('.user-card')
        
        gsap.to(gsap.utils.toArray('.user-card'),
        {
            x:0,
            opacity:1,
            // rotation:360,
            duration:1.5,
            // stagger:{amount:3, from:'edges',},
            stagger: 0.2,
        }
        )
    }catch(err){
        // console.log(err);
        renderEmptyCard(userCardContainer)
    }
        
}
rendingUserList_()

//? 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어라.


function handler(e){
    let deleteButton = e.target.closest('button');
    let article = e.target.closest('article');


    // if(target.tagName === "BUTTON")
    if(!deleteButton || !article) return;

    let id = attr(article,'data-index').slice(5);
    
    tiger.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
}




userCardContainer.addEventListener('click',handler)