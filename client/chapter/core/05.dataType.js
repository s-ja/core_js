/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);
// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

// console.log("hello");
// console.log('hello');
// console.log(`hello`);
let message1 = "hello";
let message2 = 'hello';
let message3 = `hello`;
let nickName = 'ASJ'
let message4 = `안녕 내 닉네임은 ${nickName}이야. ${ 1 + 3 }은 뭐라고 나올까, ${'안녕'/3}은 뭐라고 나올까`
console.log(message3);
console.log(message4);


// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100
let float = 100.123
console.log('number, float : ',typeof number, typeof float);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// console.log(123456n + 100); --> Error
console.log(123456n + 78910n);
// 6. 참(true, yes) 또는 거짓(false, no)
console.log('typeof true', typeof true);
console.log('typeof false', typeof false);

console.log('typeof 4>1',typeof 4>1, 'false');
console.log('typeof (4>1)',typeof (4>1), 'boolean');
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});
// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('JS_core'));

console.log(typeof Math);

const func = function() {

}

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// !json = JavaScript Object Notation (데이터 구조에 대한 필요성)


// Object 객체 -> key + value
//* 객체 리터럴
const user = new Object()
user.name = 'seungji'
user.age = 28

const user_ = {
    name: 'seungji',
    age: 28,
    tiger: function(){
        return '친절한'
    },
}

console.log(user, user.name, user.age);
console.log(user_, user_.name, user_.age);

// Array 배열
//* 배열 리터럴
let list = new Array()
// *collection을 모아둘 때 -> key와 value 없이 value 만 있음, 순서대로 인덱싱
let list_ = [11,22,33,44,55,66,77,88]
console.log(list_);
console.log('list_[Nth]', list_[0], list_[3], 'list_.length' , list_.length);

// function 함수

function sum(){
    let plus = 1+2
    return plus
}

function sum_(){
    return 3+4
}

console.log('function sum', sum());
console.log('function sum_', sum_());

function sum__(a,b){
    return a + b
}

console.log('sum__ with 100,200', sum__(100,200));

function carpBread(data){
    return `${data} 맛 붕어빵입니다.`
}
console.log(carpBread('팥'));
console.log(carpBread('크림'));
console.log(carpBread('민트'));
// this


/*
! 8가지 자료형
?위 6가지는 primitive(원시형)
*숫자형
*Bigint
*문자형
*불린형

*‘null’ 값
*‘undefined’ 값

*객체(object)[Array, function]와 심볼
*typeof 연산자 혹은 함수
*/