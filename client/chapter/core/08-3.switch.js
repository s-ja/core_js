/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN = '새벽',
      IN_DREAM = '쉬라고';

let thisTime = DAWN;

switch (thisTime) {
    case LUNCH:
        console.log( '점심 맛있게 드세요.' );
      break;
  
    case MORNING:
        console.log( '일어나세요 용사여.' );
      break;
  
    case DINNER:
        console.log( '저녁 맛있게 드십시오.' );
      break;
  
    case NIGHT:
        console.log( '편안한 밤 되십이오.' );
      break;
  
    case LATE_NIGHT: //     console.log( '빨리 자라고.' ); //   break;
    case DAWN:
        console.log( '부지런 하시네요.' );
      break;
  
    case (LATE_NIGHT || DAWN):
        console.log( '이것은 읽힐까요?' );
      break;
  
    case (IN_DREAM): console.log('꿈에서는 좀 쉬십시오.');break;

    default:
        console.log( '똑바로 하십시오, 휴먼' );
  }

//! 조건이 많아질 경우 switch 가 유리할 수 있음. (모든 방문을 일일이 열어 보는 것이 아닌, 특정 방의 번호만 조회)

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING){
    console.log('뉴스 기사 글을 읽는다.');
}else if(thisTime === LUNCH){
    console.log('자주 가는 식당에 가서 식사를 한다.');
}else if(thisTime === DINNER){
    console.log('동네 한바퀴를 조깅한다.');
}else if(thisTime === NIGHT){
    console.log('친구에게 전화를 걸어 수다를 떤다.');
}else if(thisTime === LATE_NIGHT || thisTime === DAWN || thisTime === IN_DREAM){
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}else{
    console.log('밥은 먹고 사냐?');
}

/* switch vs. if -------------------------------------------------------- */

//* 0~6까지의 수(값)을 받는다.

let day = prompt('0~6 사이로 입력하세요','요일')

switch (day) {
    case '0':
        console.log( '월요일' );
      break;
    case '1':
        console.log( '화요일' );
      break;
    case '2':
        console.log( '수요일' );
      break;
    case '3':
        console.log( '목요일' );
      break;
    case '4':
        console.log( '금요일' );
      break;
    case '5':
        console.log( '토요일' );
      break;
    case '6':
        console.log( '일요일' );
      break;
    default :
        console.log( '똑바로 하십시오.' );
}

function getRandom(n){
    return Math.round(Math.round(Math.random()*n))
}


function getDay(dayValue){
    switch (dayValue) {
        case 0:
            return '월요일';
        case 1:
            return '화요일';
        case 2:
            return '수요일';
        case 3:
            return '목요일';
        case 4:
            return '금요일';
        case 5:
            return '토요일';
        case 6:
            return '일요일';
        default :
            return '똑바로 하십시오.';
    }
}

// let result = getDay(Math.round(Math.round(Math.random()*6)));
let result = getDay(getRandom(6));
console.log(result);
// getDay(5);


// Math.round(Math.round(Math.random()*6))