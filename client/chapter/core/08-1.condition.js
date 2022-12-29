/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = prompt('숫자를 입력하세요',0)

// if(number>0){
//     console.log(1);
// }else if(number<0){
//     console.log(-1);
// }else if(number == 0){
//     console.log(0);
// }else{
//     console.log("말좀 들어");
// }

// let message = (number>0) ? '1' : (number<0) ? '-1' : '말좀 들으라니까?'
// console.log(message);




// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';

// if 문(statement)
if(didWatchMovie.includes('yes')){
// if(didWatchMovie === 'yes'){
    console.log('재밌었니');
}
// else if 복수 조건 처리
else if(goingToWatchMovie === 'yes'){
    console.log('뭐 볼꺼니');
}
// else 절(caluse)
else{
   console.log('그럼 뭐 할꺼니?');
}
// 조건부 연산자
let movieMessage = (didWatchMovie.includes('yes')) ? '재밌었니' : 
(goingToWatchMovie === 'yes') ? '뭐 볼꺼니' : '그럼 뭐 할꺼니';

console.log(movieMessage);

// 멀티 조건부 연산자 식