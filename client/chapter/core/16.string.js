/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'The devil is in the details.';
console.log(message);
console.dir(String)
console.dir(message)

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength = ',stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[8];
console.log('extractCharacter = ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message = 'why' + message[0]
// message[8] = 'i'

// 부분 문자열 추출
// let slice = message.slice(3,-1); //시작인덱스 <= "문자열"  < 끝 인덱스
let slice = message.slice(3); //시작인덱스 <= "문자열"  < 끝 인덱스
console.log('slice = ',slice);

let subString = message.substring(-1,3); //deprecated
console.log('substring = ',subString);


// let subStr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log('indexOf = ',indexOf);


let lastIndexOf = message.lastIndexOf('d',3); //뒤에서부터 시작 가장 나중에 나온 해당 글자를 찾음
console.log('lastIndexOf = ',lastIndexOf);


let includes = message.includes('The');
console.log('includes = ',includes);


let startsWith = message.startsWith('T');
console.log('startsWith = ',startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith = ',endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft = ',trimLeft);
let trimRight = message.trimRight();
console.log('trimRight = ',trimRight);
let trim = message.trim();
console.log('trim = ',trim);
let replace = message.replace();
console.log('trim = ',trim);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat = ',repeat);


// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
console.log('toLowerCase = ',toLowerCase);

let toUpperCase = message.toLocaleUpperCase();
console.log('toUpperCase = ',toUpperCase);

//! 정규표현식(?) : https://regexr.com/


// 텍스트 이름 변환 유틸리티 함수

// let toCamelCase = message.toCamelCase();
// console.log('toCamelCase = ',toCamelCase);

// let toPascalCase = message.toPascalCase();
// console.log('toPascalCase = ',toPascalCase);


//!텍스트 이름 변환 유틸리티 함수

function _toCamelCase(string) {
    return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}
  
function _toPascalCase(string) { //*위 카멜케이스를 재활용하고 있는 함수.
    let name = _toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1);
}

_toCamelCase('The devil is in the details.')
_toPascalCase('The devil is in the details.')

//!텍스트 잘라내기(또는 생략) 유틸리티 함수
function truncate(text, limit = 100, ellipsis = '...') {
    return `${text.slice(0, limit).trim()}${ellipsis}`;
}