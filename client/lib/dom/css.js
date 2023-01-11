function addClass(node,className){

    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(typeof className !== 'string'){
        typeError('addClass 함수의 두번째 인자는 문자 타입이어야 합니다.')
    }
    
    node.classList.add(className)

}


// addClass('.first','hello')

function removeClass(node,className){

    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(!className){
        node.className = ''
        return;
    }

    if(typeof className !== 'string'){
        typeError('removeClass 함수의 두번째 인자는 문자 타입이어야 합니다.')
    }


    
    node.classList.remove(className)

}


// removeClass('.first','hello')



function toggleClass(node,className){

    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(typeof className !== 'string'){
        typeError('toggleClass 함수의 두번째 인자는 문자 타입이어야 합니다.')
    }


    
    node.classList.toggle(className)

}



// toggleClass('.first','hello')



function getCss(node,prop){
    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(!(prop in document.body.style)){
        syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
    }
    
    return getComputedStyle(node)[prop]
}


// console.log(getCss('.first','font-size'))



function setCss(node,prop,value){
    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(!(prop in document.body.style)){
        syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
    }

    if(!value){
        syntaxError('setCss 함수의 세 번째 인자는 필수값 입니다.')
    }
    

    // if(value.replace(/\s+/g,'') === ''){

    // }


    // node.style.cssText=`${prop} : ${value}`;
    node.style[prop] = value;
    
}


// setCss('.first','color','red')


function css(node,prop,value){
    // if(!value){
    //     return console.log(getCss(node,prop));
    // }else{
    //     setCss(node,prop,value);
    // }

    // if(!value) return getCss(node,prop)
    // else setCss(node,prop,value)
    
    return !value ? getCss(node,prop) : setCss(node,prop,value)
}


// css('.first','font-size','100px')
// css('.first','font-size')

// const css = (node,prop,value) => {
//     return !value ? getCss(node,prop) : setCss(node,prop,value)
// }