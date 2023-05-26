// bind 메서드
// -> this을 바인딩 하는 메서드
// call, apply와는 좀 다름! 즉시 호출하지 않는다.

// [목적]
// 1. 함수에 this를 '미리' 적용한다. 
// 2. 부분 적용 함수!

let func =  function (a, b, c, d) {
    console.log(this, a, b, c, d);
}
func(1, 2, 3, 4);   // window

// 함수에 this를 미리 적음!
let func2 = func.bind({ x : 1 });
func2(2, 4, 5, 1);

// (2) 부분적용함수
// 미리 함수에 적용한다.
let func3 = func2.bind({ x : 1}, 4, 5);
func3(1,3)


// name 프로퍼티: 
// bound라는 접두어가 있다. bind의 수동태
// 바인드한 함수를 추적하여 알 수 있다.
console.log(func.name);
console.log(func2.name);
console.log(func3.name);   // func를 바인딩한 func2를 바인딩해서 결과는 bound bound func가 출력된다 ㅋㅋ
