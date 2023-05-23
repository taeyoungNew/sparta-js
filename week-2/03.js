// 단속 속성명 : property short hand
const name = "abc";
const newAge = "30";

// key - value
// key와 값의 이름이 같아면 하나로 요역가능하다.
const obj = {
    name : name,
    age : newAge
}

// 전개 구문 = spread operator
// destructuring과 함께 사용되는 es6문법 중 하나
let arr = [1, 2, 3];

let newArr =[...arr, 4];
// console.log(arr)
// console.log(newArr)

// 객체
let user = {
    name: 'abc',
    age: 30
}

let user2 = { ...user }
// console.log(user2)

// 나머지 매개변수{rest parameter}
// 매개변수의 갯수를 정확하게 모를때 
function ex(a, b, c, ... args) {
    console.log(a, b, c,)
    console.log(...args)
    // ...을 빼면
    console.log(args) // <- 배열형태로 나온다.
}
ex(1, 2, 3 ,1 ,2 ,3 ,23 ,1 ,23 ,1 ,23)

// 템플릿 리터럴
// 이거 개많이 썼는데 이름조차 몰랐네..
// 멀티라인을 지원한다. 그니까 줄바꿈이 가능
console.log(`나는 ${user.name}입니다`)
