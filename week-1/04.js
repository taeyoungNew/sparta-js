// Boolean타입
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1, bool2);

// undefined
// 정의되지 않음, 값이 할당되지 않은 변수나 함수
let x;
console.log("undefined = ", x);

// null
// null : 값이 존재하지 않음을 "명시적" 나타내는 방법 
let y = null;
console.log("null = ", y);

// object(객체) : key-value pair
// key(따옴표를 쓰지않음) : 값(어떤 타입의 값이든 상관 없음)
let object = {
    누룽지: "고양이"
};
// array
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!
// 배열값에는 고유의 index를 가지고 있다. 
let arr = [1, 2, 4, 5, 6, 7];
let fruits  = ["apple", "banana", "orange"];

fruits.map((val, index, arr) => {
    console.log(index, val, arr);
})

fruits.forEach((el, index, arr) => {
    console.log(index, el, arr);
})