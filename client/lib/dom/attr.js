//! 유틸함수를 만들자, get 함수 + set 함수 = common 함수

//get 함수 만들기
function getAttr(node,prop){
    
    if(typeof node === 'string'){
        node = getNode(node);
        // node = document.querySelector(node);
    }
    
    return node.getAttribute(prop);
}

//set 함수 만들기
function setAttr(node,prop,value){

    //* vallidation : 확인(검수)

    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(typeof prop !== 'string'){
        throw new TypeError('setAttr 두 번째 인자는 문자 타입 이어야 합니다.')
    }

    if (prop.includes("data")) {
        let rest = prop.slice(5);
        node.dataset[rest] = value;
    }


    if(!value){
        throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값 입니다.')
    }

    node.setAttribute(prop,value)
    //return 이 필요가 없음, 값을 반환할 필요가 없기 때문 (세팅만 하는 함수)
}

function attr(node,prop,value){
    // if(!value){
    //     // return node.getAttribute(prop) //오답!
    //     return getAttr(node,prop)
    // }else{
    //     setAttr(node,prop,value)
    // }
    
    return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}

//! const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value); //이렇게도 줄일수 있음.
