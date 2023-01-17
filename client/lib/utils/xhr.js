//! XMLHttpRequest : XHR / native code / 생성자 함수

// function xhrData(method,url,body){
function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}){

    // const {method, url, body} = options


    
    
    const xhr = new XMLHttpRequest();
    
    // console.log(xhr);
    
    //? 비동기 통신 오픈 : 시작
    // xhr.open('GET','https://jsonplaceholder.typicode.com/users')
    xhr.open(method,url)

    // Object.entries(headers).forEach(([key,value])=>{
    //     console.log(key,value);
    //     xhr.setRequestHeader(key,value)
    // })
    
    // xhr.setRequestHeader('name','ASJ')
    
    /* readyState
    0: uninitalized //초기화
    1: loading //로딩
    2: loaded //로딩완료
    3:interative //인터렉티브
    4:complete //완료
    */
   
//    xhr.addEventListener('readystatechange',()=>{
   xhr.addEventListener('readystatechange',()=>{
       // console.log(xhr.readyState);
       // console.log(xhr.status);

       //객체 구조 분해 할당
       const {status,readyState,response} = xhr; // 객체 구조 분해 할당

       if(status >= 200 && status < 400){
           if(readyState === 4){
               console.log('통신 성공!');
               onSuccess(JSON.parse(response));
               //    console.log(xhr.response);
               //    console.log(JSON.parse(response));
               //    console.log(typeof response);
            }
        }else{
            onFail('통신 실패')
            console.error('통신실패...');
        }
    })
    
    //?서버에 요청 : 열고 보내는 것은 세트
    xhr.send(JSON.stringify(body));
    
}

// xhrData({
//     url : 'https://jsonplaceholder.typicode.com/users'
//     method : 'GET',
//     body : null,
//     headers = {
//         'Content-Type' : 'application/json'
//     }
// })

// xhrData({
//     url : 'https://jsonplaceholder.typicode.com/users/1',
//     onSuccess: (result)=>{
//         console.log(result);
//     },
//     onFail: (err) =>{
//         console.error(err);
//     }
// })




xhrData.get = (url,onSuccess,onFail) => {
    xhrData({
        url,
        onSuccess,
        onFail
    })
}
xhrData.post = (url,body,onSuccess,onFail) => {
    xhrData({
        method:'POST',
        body,
        url,
        onSuccess,
        onFail
    })
}
xhrData.put = (url,body,onSuccess,onFail) => {
    xhrData({
        method:'PUT',
        body,
        url,
        onSuccess,
        onFail
    })
}
xhrData.delete = (url,body,onSuccess,onFail) => {
    xhrData({
        method:'DELETE',
        url,
        onSuccess,
        onFail
    })
}









// console.log(xhr);

// xhrData('GET','https://jsonplaceholder.typicode.com/users',{
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//         }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//     }
// })