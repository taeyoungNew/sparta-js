// 일급객체로서의 함수

// 1) 변수에 함수를 할당 할 수 있다. 
// sayHello를 가지고 어디서나 함수 호출을 할 수 있다.
// 함수가 마치 값으로 취급된다.
const sayHello = function () {
    console.log("Hello")
}

// 2) 함수를 인자로 다른 함수에 전달할 수 가 있다.
// 2-1) 콜백함수: 매개변수로써 쓰이는 함수
// 2-2) 고차함수 : 함수를 인자로 받거나  return하는 함수
function callFun (func) {
    // 매개변수로 받은 변수가 함수
    func();
}

// callFun함수에 sayHello함수를 매개변수로 넣어준다.
callFun(sayHello);

// 고차함수는
// 3) 함수를 반환할 수 있다. 
function createAdder(num) {
    return function(x) {
        return x + num;
    }
}
const addFive = createAdder(5);
console.log(addFive(10));