/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;

text = 'why?'
// conversationTool.name = 'line'

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {}

for(const key in messenger){
  cloneObject[key] = messenger[key]
}
// console.log(cloneObject);


// 2. Object.assign()을 사용한 복사


const copyObject = Object.assign({},messenger)
// console.log(copyObject);


// 3. 전개 연산자(...) (spread operator)를 사용한 복사


const spreadObject = {...messenger}
// console.log(spreadObject);


// 4. 객체를 복사해주는 유틸 함수 


// const functionObject = function(key,value){
//   let key = messenger.key
//   let value = messenger.value
// }
const _copyObject = object => Object.assign({},object)


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

//let combinedCssMap = Object.assign({},cssMapA,cssMapB); // 빈 객체에 둘다 겹쳐서 넣음(중복된 key는 뒤에것이 우선함)
let combinedCssMap = {...cssMapA,...cssMapB}
// console.log(combinedCssMap);



// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copyedContainerStyles = {...containerStyles}; //얕은 복사
// console.log(copyedContainerStyles);

//? 1. 깊은 복사 유틸리티 함수 (재귀)
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
    );
  }
  
let copiedContainerStyles = cloneDeep(containerStyles);

console.log(copiedContainerStyles);
  

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
