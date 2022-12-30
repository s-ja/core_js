// ! 첫번째 truthy 는 or 연산자가 찾고,
// ! 첫번째 falsy 는 and 연산자가 찿는다.
// ! not > and > or
// console.log( alert(1) || 2 || alert(3) );
// alert 는 종료후 undefined 를 반환

/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let age = 28
if (age >= 14 && age <= 90)

// if(age>=14){
//     console.log('14 over');
// }else if(age<=90){
//     console.log('90 under');
// }else{'...'}

if ((age >= 14) && (age <= 90)) {   
console.log("나이에 속합니다."); 
} else {   
console.log("나이에 속하지 않습니다.") 
}

// let age_ = prompt("나이를 입력하세요", 25);
// if (age_ >= 14 && age <= 90) { console.log("맞다!"); } else { console.log("너 몇살이냐?"); }

/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a&&b;
console.log(AandB);
// 논리합(또는) 연산자
let AorB = a||b;
console.log(AorB);
// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {} &&{thisIsFalsy:false};
// true && true && true && true -> 마지막 값 반환 : 비어있어도 배열이라는 값이 들어 있기 때문에 true
console.log(whichFalsy);
// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log([2,3].length,'[2,3].length = 2');
console.log(whichTruthy);

let userName = prompt('userName','userName') ;
// console.log(userName);
let pw ;

// if (userName === 'Admin' && pw===theMaster ){
//     alert('welcome')
// }else if(userName ==='Admin' || pw===theMaster){
//     alert('check pw')
// }else{alert('get out')}

// if(userName === 'Admin'){
if(userName?.toLowerCase() === 'admin'){
    let pw = prompt('password','password');
    if(pw?.toLowerCase() === 'theMaster'){
        // ?--> optional chaining : null 값이 들어가면 실행 자체를 안함, 없을시 .tolowercase 때문에 에러 발생
        console.log('welcome');
    }else if(pw === '' || pw === null){
        console.log('cancled');
    }else{
        console.log('get out');
    }
    // console.log('checked');
}else if(userName.replace(/\s*/g, '') === '' || userName === null){
    console.log('cancled');
}else{
    console.log("can't check");
}



//! 대소문자 구분 없이 입력 받아도 로그인이 되게끔?