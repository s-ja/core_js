import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js"

export function showAlert(node,text = 'Error',timeout = 1500){

    if(typeof node === 'string') node = getNode(node);
    
    node.textContent = text;
    
    addClass(node,'is-active')
    
    setTimeout(() => {
        removeClass(node,'is-active');
    }, timeout);
    
}

// showAlert('.alert','똑바로 서라 휴먼.',3000)