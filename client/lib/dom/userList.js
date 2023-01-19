import { insertLast } from "./insert.js";

let userInfo = {
    id : 1,
    name : 'ASJ',
    email : 'tiger@euid',
    website : 'tiger.com'
}


const createUserCard = ({
    id = '',
    name = 'Blank',
    email = 'blank',
    website:site = 'blank'
} = {}) =>{
    
    // console.log(user);
    // const {id,name,email,website:site = 'blank'} = user
    
    return /*html*/`
    <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:${email}">${email}</a>
      </div>
      <div>
        <a class="user-website" href="http://${site}" target="_blank" rel="noopener noreferer">${site}</a>
      </div>
    </div>
    <button class="delete">삭제</button>
    </article>
    `
}


// console.log(createUserCard(1,'ASJ','tiger@euid','tiger.com'))

// console.log(createUserCard({
//     id : 1,
//     name : 'ASJ',
//     email : 'tiger@euid',
//     // website : 'tiger.com'
// }))


export const renderUserCard = (target,data)=>{
    insertLast(target,createUserCard(data));
}