//! XMLHttpRequest : XHR / native code / 생성자 함수

const xhr = new XMLHttpRequest();

// console.log(xhr);

//? 비동기 통신 오픈 : 시작
xhr.open('GET','https://jsonplaceholder.typicode.com/users')

/* readyState
0: uninitalized //초기화
1: loading //로딩
2: loaded //로딩완료
3:interative //인터렉티브
4:complete //완료
*/

xhr.addEventListener('readystatechange',()=>{
    // console.log(xhr.readyState);
    // console.log(xhr.status);
    if(xhr.status >= 200 && xhr.status < 400){
        if(xhr.readyState === 4){
            console.log('통신 성공!');
        }
    }
})

//?서버에 요청 : 열고 보내는 것은 세트
xhr.send();

// console.log(xhr);
