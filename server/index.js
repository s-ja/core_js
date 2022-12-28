console.log('Have a Nice Trip');
// console.log(window);
console.log(global);

// js 가 작동할 수 있는 환경 - 브라우저와 노드

const liveServer = require('live-server');

const params = {
    host: 'localhost',
    port: '3000',
    open: 'false',
    root: './client'
}

liveServer.start(params);

// console.log(globalThis);