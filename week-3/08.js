// 명시적 this binding
// call, apply, bind

// 1) call 
var func = function (a, b, c) {
    // this는 글로벌 객체를 가리킴
    console.log(this, a, b, c)
}
// no binding
// func(1, 2, 3)

// 명시적 binding
func.call({x : 1}, 34, 223, 31);

