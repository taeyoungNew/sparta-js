// es6

// 2015년 => var : 재할당 재선언이 된다. 
// 1) es6 => let(변수) const(상수) <- 변하지 않은 값을 가진 재할당이 안된다.

// 2) arrow function
// 기본
function name () {

}

// 함수선억식
let name1 = function () {

}

// 화살표함수
let name2 = (param) => {
    return param
}

let name3 = (x) => '태영';

// 3) 상항연산자
console.log(true ? '참' : '거짓');
console.log(false ? '참' : '거짓');