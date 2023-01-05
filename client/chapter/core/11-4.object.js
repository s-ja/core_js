/* ---------------------------------------------------------------------- */
/* Object Methods and This                                                */
/* ---------------------------------------------------------------------- */
//? concise method - 함수 내부에 constructor 를 내장하지 않는다 - 성능적인 이점 등.

let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name); //this = user를 가리킴
    },
    sayHi_: ()=>{
        console.log(this.name); //this = window를 가리킴
    }
  
};
  
user.sayHi(); // John
//user.shaHi_.call(user) // Error?

//!객체의 메서드로 함수를 정의할 경우에는 일반함수(?)
//!메서드 안에서 함수를 선언해야 할 경우는 화살표 함수를 이용하자.
//!일반함수로 만들었을 경우 arrow함수를 실행의 주체가 모호하기 때문에 window를 참조, 'use strict'일때는 undefined일것.
//* this는 런타임에 의해 결정됨, 맥락에 따라 다르다.










// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
    date: '2022. 7. 6',
    tableIndex: 5,
    menu: [
      { name: '통 새우 돈까스', price: 13000, count: 2 },
      { name: '치즈 돈까스', price: 10000, count: 1 },
    ],
    totalPrice(){
        // console.log(this);
        // console.log(this.menu[0].price*this.menu[0].count);

        this.menu.reduce((acc,cur) => acc + cur.price * cur.count,0
            // console.log(acc); // reduce->배열의 첫번째 객체를 뱉어냄
            // console.log(cur); // reduce->배열의 두번째 객체를 뱉어냄
        )
    }  
};

shopOrder.totalPrice()










  
  // 메서드와 this
  // ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
  // ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
  //   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
  //   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
  //   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
  //   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.
  
  
  // 메서드 단축 구문
  
  
  // 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this
  
  const navigationMenu = {
    name: '글로벌 내비게이션',
    items: [
      { id: 'link-g', text: 'Google', link: 'https://google.com' },
      { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
    ],
    getItem(index) {
      return this.items[index];
    },
    addItem(newItem) {
      this.items.push(newItem);
    },
  };



  console.log(navigationMenu.getItem(0))
  
  
  navigationMenu.addItem({
      id: 'link-y',
      text: 'Yandex',
      link: 'https://yandex.com'
    })
    
    console.log(navigationMenu.getItem(1))









  //! (메소드)체이닝 과제

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        console.log( this.step );
        return this
    }
  };