/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

// /* eslint no-unused-vars: 'off' */
// /* eslint no-unused-vars: 'warn' */
// /* eslint no-unused-vars: 'error' */
let admin;
let name;

name = 'Jhon';
admin = name;

console.log(admin);
console.log(name);

// alert(admin);
// alert(name);

let ourPlanet = 'Earth';
let currentUser = 'ASJ'


/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보


/* variables ----------------------------------------------------------- */

// !trial
// - 갯수 별 상품 가격 계산하기
const productPrice = 500;
// - 구매 제품 가격의 총 합
let wholePrice;
// - 1년 기준 일(day)자 수
const daysOfYear = 365;
// - 구매 결제 여부
let isPaid;
// - 구매 결제 내역
let paidList;
// - 브랜드 접두사
const brandPrefix = 'the';
// - 오늘의 운세
let todaysLuck;
// - 상품 정보
let productDetail;

// !answer
// - 갯수 별 상품 가격 계산하기
let calcProductQuantity;
// - 구매 제품 가격의 총 합
let totalPriductPrice;
// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;
// - 구매 결제 여부
let isPayment = false;
let hasClassName = false;
// - 구매 결제 내역
let paymentHistory;
// - 브랜드 접두사
const BRAND_PREFIX = 'the Best?'
// - 오늘의 운세
let fortuneOfToday;
// - 상품 정보 (이 경우는 상황에 따라 다르므로 둘 다 가능할것.)
const productInfo = '';
let product;

/* constant variables -------------------------------------------------- */



// !Redux
// *리액트에 들어가면 만나게 될 개념들

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패
const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED ='api/fulfilled';
const RESOLVED = 'api/resolved';
const REJECTED = 'api/rejected';

var nickName = 'sam';
// let nickName = 'john' //temporal dead zone (임시 사망 지역?)