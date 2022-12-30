/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2022,
    hasOwnProperty: function(){
        return '두통'
    }
  };
  
  let key = 'creator';
//   console.log(key in javaScript)

  let key_ = 'createAt';
//   console.log(key_ in javaScript);
  
  let key__ = 'valueOf'
//   console.log(key__ in javaScript);
  
  let key___ = 'string'
//   console.log(key___ in javaScript);
  
  let key____ = 'window'
//   console.log(key____ in javaScript);

  // 객체의 속성(property) 포함 여부 확인 방법
  // - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
  Object.prototype.nickname = 'ASJ'
  
//   console.log(javaScript.hasOwnProperty(key));
//!  hasOwnProperty 자체는 js안에서 보호받지 못하는 '함수!'. / 다른 안전한 사용법 필요.
//   console.log(javaScript.hasOwnProperty(why));

//? console.log(Object.prototype.hasOwnProperty.call(javaScript,key))
//? hasOwnProperty라는 함수의 능력중 하나 call = 빌려쓰기 위함?
  
  //! hasOwnProperty
  // 객체 자신의(own) 속성(property)인지 확인(has)하는 방법
  // - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
  
  
  // for ~ in 문
  // - 객체 자신의 속성만 순환하려면?
  // - 배열 객체 순환에 사용할 경우?

// let a = {}
// Object.prototype === {}
  
  
for( let key in javaScript){

    // console.log(key);

    // if(Object.prototype.hasOwnProperty.call(javaScript,key)){
    if({}.hasOwnProperty.call(javaScript,key)){
        console.log(key);
    }

}

//* for~in문에서 객체 안의 대상을 파악하면 조상까지 올라가서 문제 생겨서 해결법은?
//*객체 자신의(own) 속성(property)인지 확인(has)하는 방법 : hasownproperty
//*그런데 hasownproperty가 함수 자체를 보호해주지않아 오염될 변질이 생겨서 해결법은?
//*Object.prototype.hasOwnProperty.call(javaScript,key)

const user = {
    name : 'ASJ',
    age : 28
}

function hello(){
    console.log(this);
}

// hello.call(user)
// hello.call(age)
// hello.call()
//! call() / apply() / bind() - 늬들은 뭐니??

let tens_ = [10,100,1000,10000];

for(let value in tens){
    console.log[value];
}

let tens = [10,100,1000,10000];

for(let value in tens){
  if( ({}).hasOwnProperty.call(tens,value)){
    console.log(tens[value]);
  }
}

//! for_in 은 배열에는 사용하지 말것, 객체에 사용할것! for_each는 배열에 사용해도 안전