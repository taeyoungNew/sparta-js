// 함수 = function(기능)
// input, output

// 1. 함수 선언
function add () {
    // 함수 내부에서 실행할 로직

}

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내 함수
function add(x, y) {
    return x + y
}

let result = add(1, 20)
console.log(result)

// 2. 함수표현식
let add2 = function (x, y) {
    return x + y
}
let result2 = add2(1, 5)
console.log(result2)
// 함수를 호출한다.(= 사용한다)
// 함수명() => add(param)

