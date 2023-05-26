function a() {
    var x = 1;
    console.log(x); // 1
    var x;
    console.log(x); // undefined
    var x = 2;
    console.log(x)  // 2
}

a();

// var x
// var x
// var x

// x = 1;
// console.log(x)
// console.log(x)
// x = 2;
// console.log(x)


function b () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
b();
// 호이스팅이 될떄 함수가 호이스팅
// var b;
// function b;

// console.log(b)   // function 
// b = 'bbb';   
// console.log(b)   // bbb
// console.log(b)   // bbb

// 함수선언문과 함수표현식
// 함수 선언문. 함수명 a가 곧 변수명
// function 정의부만 존재, 할당 명령이 없는 경우
function a () { /* ... */ }
a(); // 실행 ok

// 함수 표현식. 정의한 function을 별도 변수에 할당하는 경우
// (1) 익명함수표현식 : 변수명 b가 곧 변수명(일반적 case에요)
var b = function () { /* ... */ }
b(); // 실행 ok

// (2) 기명 함수 표현식 : 변수명은 c, 함수명은 d
// d()는 c() 안에서 재귀적으로 호출될 때만 사용 가능하므로 사용성에 대한 의문
var c = function d () { /* ... */ } 
c(); // 실행 ok
d(); // 에러!
