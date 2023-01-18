
import { getNode } from '../dom/getNode.js'
import { isNumber,isObject } from './typeOf.js'


const first = getNode('.first');
const second = getNode('.second');
const third = getNode('.third');


function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}
// console.log(first);

// function delay(callback,timeout = 1000){
//     setTimeout(callback,timeout);
// }


// delay(()=>{ //!콜백 지옥
//     first.style.top = '-100px'
//     delay(()=>{
//         first.style.transform = 'rotate(360deg)'
//         delay(()=>{
//             first.style.top = '0px'
//         })
//     })
// })

// delayP() //!promise : 콜백에 대한 타파
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   second.style.left = '100px';
//   third.style.left = '100px';
//   return delayP()
// })
// .then(()=>{
//     first.style.top = '0px';
//     third.style.left = '0px';
// })




// first.style.transform = 'rotate(360deg)' // 동시에 작동 -> 콜백의 필요성 & 콜백지옥

// first.style.top = '0px'

//! 프라미스 = 오로지 콜백의 가독성만을 위해.










// function delayP(timeout=1000){
// function delayP(shouldReject = false, timeout=1000,data = '성공했습니다.' , errorMessage = '알 수 없는 오류가 발생했습니다.'){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // if(!shouldReject){
//             //     resolve('성공.');
//             // }else{
//             //     reject('실패.');
//             // }
//             !shouldReject ? resolve(data) : reject(errorMessage);
//         },timeout);
//     })
// }


// delayP(false, 1000, '과연 성공?' , 'Error')
// delayP(false)

// console.log(delayP());


// delayP().then((res)=>{
//     console.log(res);
// }).then(()=>{
//     //프라미스 체이닝 
// }).then(()=>{
//     //프라미스 체이닝 
// }).then(()=>{
//     //프라미스 체이닝 
// }).then(()=>{
//     //프라미스 체이닝 
// }).then(()=>{
//     //프라미스 체이닝 
// })
// delayP()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



// delayP()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))







const defaultOption = {
    shouldReject : false,
    timeout : 1000,
    data : '성공',
    errorMessage : '알 수 없는 오류가 발생했습니다.'
}




export function delayP(options = {}){
    
    // const {shouldReject,data,errorMessage,timeout} = options

    let config = {...defaultOption};
    // let config2 = Object.assign({},defaultOption)

    if(isNumber(options)){
        config.timeout = options;
    }

    if(isObject(options)){
        config = {...config,...options};
    }
    
    
    //객체합성 (mixin)

    const {shouldReject,data,errorMessage,timeout} = config;

    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // if(!shouldReject){
            //     resolve('성공.');
            // }else{
            //     reject('실패.');
            // }
            !shouldReject ? resolve(data) : reject(errorMessage);
        },timeout);
    })
}

// delayP({
//     data: '안녕',
//   }).then((res)=>{
//     console.log(res); // 진짜 성공
//   })





//! async & await

// async function delayA(){
//     return '완료'
// }

// // let result = delayA().then((res)=>{console.log(res);})
// // let result = delayA()
// let result = await delayA()

// console.log(typeof result);
// console.log(result);

// async function 라면끓이기(){
//     try{

//         await delayP(1000)
//         first.style.top = '-100px';
        
//         await delayP(1000)
//         first.style.transform = 'rotate(360deg)';
        
//         await delayP(1000)
//         first.style.top = '0px';
        
//         await delayP(1000)
//         console.log('계란넣기');
//         // throw new Error('계란 껍질이 들어갔다.');
        
//         await delayP(1000)
//         console.log('그릇에담기');
        
//     }catch(err){
//         console.log(err);
//     }
// }
  
  
  

// 라면끓이기()
  
  