function getNode(node){
    if(typeof node !== 'string'){
        throw new Error('_getNode 함수의 인자는 문자타입이어야 합니다.')
    }
    return document.querySelector(node)
}







function getNodes(node){
    if(typeof node !== 'string'){
        throw new Error('_getNode 함수의 인자는 문자타입이어야 합니다.')
    }
    return document.querySelectorAll(node)
}


// console.log(getNode('.first'));