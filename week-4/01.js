// 콜백 함수 
// 다른 코드의 인자로 넘겨주면서 그 제어권도 함꼐 위임한 함수
// 인자로 넘겨준다는 얘기는 콜백함수를 넘겨 받는 코드가 있다. 
setTimeout(function () {
    console.log("hello");
}, 1000);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number)
})

