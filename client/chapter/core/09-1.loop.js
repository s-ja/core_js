/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

let i = 0;
const j = 0;
while (i < 10) {
    console.log('hello?');
    i++;
}





const frontEndDev = [
    'HTML',
    'CSS',
    'SVG',
    'JavaScript',
    'jQuery',
    'React',
    'Redux',
  ];

  console.log(frontEndDev[1]);
  
  /* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */
  
//   console.log(frontEndDev[0]);
//   console.log(frontEndDev[1]);
//   console.log(frontEndDev[2]);
//   console.log(frontEndDev[3]);
//   console.log(frontEndDev[4]);
//   console.log(frontEndDev[5]);
  
let f = 0;

// while(f<6){
while (f < frontEndDev.length) {
    let value = frontEndDev[f];
    console.log(frontEndDev[f]);
    f++
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// let g = frontEndDev.length-1;
let g = frontEndDev.length;

while( g >= 0){
    console.log(g, frontEndDev[g]);
    let value = frontEndDev[g]
    g--
}

let copyArray = [...frontEndDev];
let copyArray_ = [frontEndDev];
let copyArray__ = frontEndDev.slice();
//! slice(),map() 원본을 파괴시키지 않음

while(frontEndDev.length){
    // console.log(frontEndDev.pop()); //! pop:뒤에서부터
    console.log(frontEndDev.shift()); //! shift:앞에서부터
}
console.log(frontEndDev); //! 파괴된 배열

console.log(copyArray);
console.log(copyArray_);
console.log(copyArray__);

console.log(performance.now())
  
  /* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */
  
  // while 문 (순환 : 순방향)

  // while 문 (역순환 : 역방향)
  
  // 성능 진단 : 순환 vs. 역순환