// 무슨 제어권?
// 1. 호출 시전에 대한 제어권을 갖는다. 

let count = 0;

// setInterval
// 각 호출시에 고정된 시간 지연으로 반복된 호출시 상당히 유용하다. 
// let timer = setInterval(() =>{
//     console.log(count);
//     if(++count > 4) {
//         clearInterval(timer);
//     }
// }, 300);

/////////////////////////////////
let sayHello = function () {
    console.log('hello');
    if(++count > 5) {
        clearInterval(done);
    }
}

let done = setInterval(sayHello, 500);


