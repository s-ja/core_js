/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//     return moneyA + moneyB + moneyC + moneyD;
//   }

// const calculateTotal = (moneyA, moneyB, moneyC, moneyD) => {
//     return moneyA + moneyB + moneyC + moneyD;
// }

// sum(1,2,3,4,5)
//? rest파라미터와 스프레드 오퍼레이터

const calculateTotal = (...args) => {
// const calculateTotal = (priceA,priceB,priceC,...args) => {

    let total = 0;
    // args.forEach(function(item,index){
    args.forEach(item => {

        total += item

    })
    
    // args.reduce((acc,item)=>acc+item)    
    // console.log(args);

    return total;
}

  let resultX = calculateTotal(10000, 8900, 1360, 2100);
//   let resultY = calculateTotal(21500, 3200, 9800, 4700);
//   let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 화살표 함수 (표현)식
  let calcAllMoney = (a,b,c,d) => a+b+c+d;
  
  
  // 화살표 함수와 this
  function normalFunction(){
    console.log('일반함수의 this : ',this);
  }
  
  const arrowFunction = () =>{
    console.log('화살표 함수의 this : ',this);
  }

  normalFunction()
  arrowFunction()

// ! 일반 함수 => 나, 화살표 함수 => 내 위의 부모 (즉, 전역인 window 나옴)
// ! 객체 안에서 함수 메서드는 일반 함수가 낫다
//? 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
//? 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아

  const user = {
    name: 'asj',
    age: 28,
    address: '여의대방로 59나길 8 302',
    grades: [11,22,33],
    totalgrade: function (){
        // console.log(this);
        // console.log(this.grades)
        let total = 0;
        this.grades.forEach((item)=>{
            total += item
        })
        return total
    }
  }

    console.log(user.totalgrade())

  /* 다음 함수를 작성해봅니다. -------------------------------------------------- */
  
  // pow(numeric: number, powerCount: number): number;
  let pow;

  pow(2,53) // 9007199254740992
  
  // repeat(text: string, repeatCount: number): string;
  let repeat; 