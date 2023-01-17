import { getNode } from "../dom/index.js";


const first = getNode('.first');

// console.log(first);

function delay(callback,timeout = 1000){
    setTimeout(callback,timeout);
}


delay(()=>{
    first.style.top = '-100px'
    delay(()=>{
        first.style.transform = 'rotate(360deg)'
        delay(()=>{
            first.style.top = '0px'
        })
    })
})


// first.style.transform = 'rotate(360deg)' // 동시에 작동 -> 콜백의 필요성 & 콜백지옥

// first.style.top = '0px'

//! 프라미스 = 오로지 콜백의 가독성만을 위해.


