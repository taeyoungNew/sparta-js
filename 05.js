// 형 변환
// 형태 -> 바꾼다.
// 명시적 형 변환 : 개발자가 의도적으로 바뀐 형 변환
// 암시적 형 변환 : 의도적이지 않은 자동으로 바뀐 형 변환

// 1. 암시적
// 1-1. 문자열 
// numbet타입과 str타입이 만나면 str타입으로 형변환이 된다. 
let result1 = 1 + "2";
console.log(result1);
console.log(typeof(result1));

// number타입과 Boolean타입이 만나면 str타입으로 형변환이 된다.
let result2 = '1' + true;
console.log(result2); // -> 1true
console.log(typeof(result2));

// {}, null, undefined + "1" => 문자열이 된다. 

// 1-2, 숫자
// let result3 = 1 - "2";
// console.log(result3);
// console.log(typeof(result3));

let result4 = "2" * "3";
console.log(result4);
console.log(typeof(result4))

// => +연산자를 제외한 나머지 연산자인경우 String타입으로 된 숫자는 모두 String타입에서 number타입으로 된다

// 2. 명시적 형 변환
// 2-1. Boolean
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log("---------------------------------")
console.log(Boolean("false"))
console.log(Boolean({}))
console.log(Boolean([]))


// // 2-2. 문자열로 형변환
// let result5 = String(123);
// console.log(result5);

// let result6 = String(true);
// console.log(result6);

// let result7 = String(false);
// console.log(result7);

// let result8 = String(null);
// console.log(result8);

// let result9 = String(undefined);
// console.log(result9);

// 2-3. Number
let result7 = Number("123");
console.log(result7)