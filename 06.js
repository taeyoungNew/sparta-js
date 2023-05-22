// 연산자(+, -, *, /, %)

// // 1. 더하기 연산자
// console.log(1 + 1);
// console.log(1 + "1");

// // 2. 빼기 연산자
// console.log(1 - "2");
// console.log(1 - 2);

// // 3. 곱하기 연산자
// console.log(3 * "2");
// console.log(3 * 2);


// // 4. 나누기 연산자
// console.log(3 / "2");
// console.log(3 / 2);


// // 5. 나머지 연산자
// console.log(5 % "2");
// console.log(5 % 2);

// // 6. 할당 연산자(assignment)
// // 6-1. 등호 연산자(=)
// let val = 10;

// // 6-2. 더하기 등호 연산자(+=)
// val += 10;
// console.log(val)

// // 6-3. 배기 등호 연산자(-=)
// val -= 30;
// console.log(val)
let a = 10;
a *= 2;
console.log(a);

// 비교 연산자(true또는 false를 반환하는 연산자)
// 1. 일치 연산자(===)
// 값과 타입까지 일치해야 true를 반환한다.
// true
console.log(2 === 2)
// false
console.log("2" === 2);

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환 하는 연산자

console.log(2 !== 2);
console.log("2" !== 2);

// 3. 작다 연산자(<)
console.log(2 < 3);
console.log(2 > 3);
console.log(3 >= 3);

console.log('-----------------------------------------');
// 4. 논리 연산자
// 4-1 논리곱연산자
// true false를 가려냄
// && 둘다 true일때만 true를 반환한다.
console.log(true &&  true)
console.log(true &&  false)
console.log(false &&  true)
console.log(false &&  false)

console.log('-----------------------------------------');
// 4-2 논리합 연산자
// || 둘중 하나라도 true일때 true를 반환
console.log(true ||  true)
console.log(true ||  false)
console.log(false ||  true)
console.log(false ||  false)
console.log('-----------------------------------------');

// 4-3 논리 부정 연산자
// 값을 반대로 바꿈
console.log(!true)
let val = true;
console.log(!val)
let val2 = false;
console.log(!val2)
console.log('-----------------------------------------');


// 5. 삼항연산자(중요!!)
// 조건에 따라 값을 선택한다.
let x = 10;
// ?앞의 값이 true면 ?뒤의 첫번째값이, false면 2번째 값이 반환
let result = (x > 5) ? "크다" : "작다"
console.log(result)

let y = 9;
// 3항연산자를 이용ㅇ해서 y가 10보다 작은 경우 작다
let result2 = y < 10 ? "작다" : "크다"
console.log(result2)
