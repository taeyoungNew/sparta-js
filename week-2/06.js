// 배열의 요소호 함수를 할당

const myArr = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a - b;
    }
]
// 배열안의 함수로 접근방법
let result = myArr[0](1, 2)

console.log(result)