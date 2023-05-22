// arrow variable
// ES6 신문법
// 1-1 기본적인 화살표 함수
let arrowFun01 = (x, y) => {
    return x + y;
}
console.log(arrowFun01(4, 10));

// 한줄로 표기 
let arrowFun02 = (x, y) => x * y;
console.log(arrowFun02(10, 10));


//
function testFunc(x) {
    return x;
}

// 화살표함수로
let testFunc = x => x;
