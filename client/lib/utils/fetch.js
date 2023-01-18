const defaultOptions = {
    method: 'GET', //?이건 알아둘것
    mode: 'cors',
    body:null, //?이건 알아둘것
    cache: 'no-cache',
    credential: 'same-origin',
    redirect:'follow',
    referrerPolicy: 'no-referrer',
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    }
  }







// async function tiger{

export const tiger = async (options = {}) =>{


    const {url, ...restOptions} = {...defaultOptions, ...options, headers:{
        // ...defaultOptions.headers, ...options.headers
        ...(defaultOptions.headers ?? {}), ...(options.headers ?? {})
    }}

    // console.log(restOptions);



    let response = await fetch(url,restOptions)



    // let response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users/1',
    //     {
    //         method:'GET',
    //         headers:{
    //             'Content-Type' : 'application/json',
    //             // 'Access-Control-Allow-Origin': '*'
    //         },
    //         // body:{
    //         //     name : 'tiger'
    //         // }
    //     }
    // )

        if(response.ok){
            // console.log(typeof response);
            // console.log(response);

            // console.log(typeof(response.json()));
            // console.log(response.json());

            response.data = await response.json()
        }
        // else{
        //     throw new Error('Error : 404')
        // }





    // console.log(response);
    
    // response.then((res)=>{
        //     console.log(res);
        // })

        // console.log(typeof response);
        // console.log(response);

        
        
        
        
    return response;
}

// tiger();
// console.log(tiger());
// console.log(await tiger());


tiger.get = (url,options) =>{
    return tiger({
        url,
        ...options
    })
}
tiger.post = (url,body,options) =>{
    return tiger({
        method: 'POST',
        url,
        body:JSON.stringify(body),
        ...options
    })
}
tiger.put = (url,body,options) =>{
    return tiger({
        method: 'PUT',
        url,
        body:JSON.stringify(body),
        ...options
    })
}
tiger.delete = (url,options) =>{
    return tiger({
        method: 'DELETE',
        url,
        ...options
    })
}

// tiger.post('https://jsonplaceholder.typicode.com/users/1',{name:'tiger'},{mode:'cors',headers:{}})