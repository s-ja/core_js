/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// let i = 0
// while(i<0){
//     i++
// }

for (let i=0; i<10; i++){
    // console.log(i);
}

let j=10;
for(;j<20;j++){
    // console.log(j);
}
// console.log(j);

for(let t=20 ; t<30 ; t++){
    // console.log(t);
}
// console.log(t);

let g = 40
for(; g<50;){
    g++
    // console.log(g++);
}

// 2 ~ 10까지의 짝수 출력하기

for (let i = 0; i <= 10; i++) {

    if (i % 2 !== 0 || i === 0) continue;
  
    // console.log(i);
  }

// 2 ~ 10까지의 짝수 출력하기 END

const test = 'a,s,d,f,g,h,j,k,l'.split(',')
// console.log(test);

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
//? split()은 string의 기능중 하나.

// let i = 0;
// let l = frontEndDev.length;

// while(i < l) {
// //   console.log(frontEndDev[i]);
//   i += 1;
// }

for(let i = 0; i<frontEndDev.length; i++){
    // console.log(frontEndDev[i]);
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//!   - 조건: SVG, jQuery는 출력하지 마세요.

// for(let i=0; i<frontEndDev.length; i++){

//     let result = frontEndDev[i];

//     if(result.includes('svg') || result.includes('jQuery')) continue;

//     // console.log(frontEndDev[i]);
//     console.log(frontEndDev[result]);
// }

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for(let i=0; i<frontEndDev.length; i++){

    let result = frontEndDev[i];

    if(result.includes('jQuery')) break;

    console.log(result);
}

// - 성능 향상에 도움이 되는 팁
//   - 무한 루프 (브레이크)
//   - for 문 (역순환)