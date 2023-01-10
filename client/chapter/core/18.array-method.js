/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [11,22,33,44,55]

console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(Array.isArray({}));
console.log(Array.isArray('  '));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));

function isArray(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowercase() === 'array'
}
function isNull(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowercase() === 'null'
}
console.log(Array.isArray([]));

/* 요소 순환 -------------------------------------------------------------- */

const user = {}

arr.forEach(function(item,index){
    // console.log(item);
    this[index] = item
},user)

const span = document.querySelectorAll('span')

// forEach

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift

// reverse
//* arr.reverse()
console.log(arr);

// splice
//* splice(시작,제거,[추가]))
arr.splice(1,2,4,5)
console.log(arr);

// sort

// 반환값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환값 = 0 : a와 b의 순서가 바뀌지 않는다.
// 반환값 > 0 : b가 a보다 앞에 있어야 한다.

arr.sort((a,b) => {
    return a-b
})
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

console.log(arr);
let newArray = arr.map((item)=>{
    // console.log(item);
    return item * 2
})

let _newArray = newArray.map(item => item*2)

console.log(newArray);
console.log(_newArray);

let todo = ['core마무리','DOM시작','복습','예습']

let template =  todo.map((todoList)=>{
    return /*html*/ `<li>${todoList}</li>`
})

template.forEach((item) => {
    document.body.insertAdjacentHTML("beforeend", item);
});

console.log(template);

//! forEach => 함수 여러 번 돌리기
//! map => 함수 돌려서 배열 만들기

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf - 포함여부를 확인

console.log(arr);
console.log(arr.indexOf(4))
console.log(arr.indexOf(999))

// lastIndexOf
// includes - 포함여부를 확인(뒤에서부터!)

console.log(arr);
console.log(arr.includes(4))
console.log(arr.includes(999))



/* 요소 찾기 -------------------------------------------------------------- */

const users = [
    {id:1,name:'로운'},
    {id:2,name:'승택'},
    {id:3,name:'연주'},
]

// find

const find = users.find((item,index) =>{ //*딱 하나만 찾고 종료
    return item.id < 3
})
console.log(find);

// findIndex

const findIndex = users.findIndex((item,index) =>{
    return item.id === 3
})
console.log(findIndex);


/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number)=>{
    return number < 100
})
console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
    {
      name: '윤보라',
      age: 28,
      job: '작꼬져',
    },
    {
        name: '이로운',
        age: 23,
        job: '배고픈 개발자',
    },
    {
        name: '오승택',
        age: 21,
        job: '물음표살인마',
    }
];
// reduce

let age = friends.reduce((acc, cur) => {
    return acc + cur.age
}, 0);

console.log(age);

let template2 = todo.reduce((acc,cur,index) => {
    return /*html*/acc + `<li>${index + 1} : ${cur}를 과연 할까...</li>`
},'')

console.log(template2);

// reduceRight //*그냥 오른쪽부터 시작함

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split //*문자를 배열로 만들어 주는 기능

let nameArray = str.split(' ')
console.log(nameArray);

// join //*배열을 문자로 만들어 주는 기능

console.log(nameArray.join(' / '));