function handler() {
    let isClicked = false;
  
    return function () { //화살표 함수로 바꾸면 this를 찾지 못하기 때문에 Error -> 일반 함수로 작성해야 함.
      if (isClicked === true) {
        this.style.background = "transparent";
      } else {
        this.style.background = "red";
      }
  
      isClicked = !isClicked;
    };
  }
  
  document.querySelector(".first").addEventListener("click", handler());