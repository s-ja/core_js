/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode('.first')

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

console.log(first.hasAttribute('class')); //true

// - elementNode.getAttribute(name) – 속성값을 가져옴

console.log(first.getAttribute('class')); //first
console.log(first.getAttribute('class') === 'second'); //false

// - elementNode.setAttribute(name, value) – 속성값을 변경함

first.setAttribute('id','box');
// first.id = 'box' //이것으로도 가능은 함, 1대1 매핑이 잘 이루어졌기 때문에
first.setAttribute('some','hello'); //이러한 비표준 속성또한 잘 들어감.
// first.setAttribute('class','is-active'); //is-active 같은 클래스 또한 넣을 수 있음, 하지만 기존의 속성(클래스)가 지워짐, addClassList(?)

// - elementNode.removeAttribute(name) – 속성값을 지움

// first.removeAttribute('some'); // 위에서 설정한 비표준 속성을 지움
first.removeAttribute('some', '');

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

console.log(first.attributes); //symbol에 보면 iterator 속성을 찾을 수 있음 (유사배열) -> for-of로 순환 시킬 수 있음. //열거 가능하고 순환 가능한 개체

// for of 를 쓸 수 있냐 없냐?
for (let i = 0; i < first.attributes.length; i++) {
    console.log(first.attributes[i]);
}
  
  // iterator 한 속성이므로 사용 가능, 배열과 객체를 순환해야 할 때는 for of 가 더 낫다.
  // Symbol.iterator
  for (let value of first.attributes) {
    console.log(value);
}


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.play = 'playing' //set

console.log(first.dataset.play); ///get



//? getNode라는 함수를 보호할때(?) - 즉시 실행함수 예시
// (function () {
//     let first = $(".first");
//   })(getNode);
