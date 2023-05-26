// 유사배열 
var obj = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력
console.log(arr)

// 객체
console.log(obj.length)