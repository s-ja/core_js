/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const visual = getNode('.visual') //section
const news = getNode('.news') ///article
const desc = getNode('.desc') //p

//! target : 마우스가 처음 만나는 대상(직접적으로 클릭한 대상)
//! currentTarget : 이벤트가 걸린 대상(직접 클릭한 대상이 아닌 이벤트가 걸린 대상) == this


/*
visual.addEventListener('click',function(e){
    // console.log('target : ',e.target); // 실행점(?)
    // console.log('current target : ',e.currentTarget); //제일 처음 마우스가 만나는(닿는) 지점
    // console.log('this : ',this);
    // console.log('this === e.currentTarget : ',this === e.currentTarget);
    console.log('%c visual','background:darkred');
})
*/


visual.addEventListener('click',(e) =>{
    let elem = e.currentTarget;
    
    console.log('this : ',this); //!
    console.log('elem : ',elem);
    console.log('this === e.currentTarget : ',this === e.currentTarget); //!
    console.log('%c visual','background:darkred');

    css('.pop','display','block');
})


getNode('.pop').addEventListener('click',(e)=>{
    e.stopPropagation();
    
    css('.pop','display','none'); //? stopPropagation 이 없으면 버블링으로 인해 작동하지 않음
})


// news.addEventListener('click',function(){
//     console.log('%c visual','background:red');
// })

// desc.addEventListener('click',function(e){
//     e.stopPropagation()
//     console.log('%c visual','background:maroon');
// })


/* 캡처링 ----------------------------------------------------------------- */