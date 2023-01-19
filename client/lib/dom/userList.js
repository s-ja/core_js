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


const createSpinner = (size = 100, loadingMessage = '유저 정보를 가져오는 중입니다.') =>{
  return /* html */`
  <figure class="loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#transparent;display:block;" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" r="32" stroke-width="15" stroke="#262323" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
      </circle>
  </svg>
      <figcaption>${loadingMessage}</figcaption>
  </figure>
  `
}


export const renderSpinner = (target)=>{
  insertLast(target,createSpinner());
}


// renderSpinner()