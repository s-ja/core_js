import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";
import { getNode } from "./getNode.js";

// JSDoc - 위에서 값을 설정해두면 바로 밑에 오는 함수에 설명을 적는 주석. (VSC에서 제공) / !== 'typescript'

/**
 * @function isElement checkElement
 * @param {HTMLElement} node 
 * @return set disabled
 */

export function disableElement(node){
    // if(node.nodeType !== document.ELEMENT_NODE){
    if(!isElement(node)){
    // if(node.nodeType !== 1){
        typeError('disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
    }
    
    node.disabled = true;
}
export function enableElement(node){
    if(node.nodeType !== document.ELEMENT_NODE){
        typeError('enableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
    }

    node.disabled = false;
}


export function visibleElement(node){
    if(!isElement(node)){
        typeError('visibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
    }

    node.hidden = false;
}
export function invisibleElement(node){
    if(!isElement(node)){
        typeError('invisibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
    }

    node.hidden = true;
}