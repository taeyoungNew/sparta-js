// 배열 
// 1. 생성
// // 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"]

// // // 1-2 크기지정
// // let number = new Array(5);
// // console.log(number.length)

// // console.log(fruits.length)


// // 2. 요소접근
// console.log(fruits)

// // 3. 배열 메소드
// // 3-1 push 맨뒤자리부터 요소 넣기
// fruits.push('오렌지')

// console.log(fruits)

// // 3-2. pop 멘 뒤자리의 요소 없애기
// fruits.pop() 
// console.log(fruits)

// // 3-3. shift 맨 앞자리의 요소 없애기
// fruits.shift();
// console.log(fruits)

// // 3-4. unshift 맨 앞자리에 요소 추가하기
// fruits.unshift('포도')
// console.log(fruits)

// 3-5. splice 
// 아래 코드풀이
// 1번째 요소부터 1번째 요소까지 삭제하고 맨 오른쪽의 요소로 갈아끼워라
// 다 갈아 끼우는건 아니고 범위만큼 값을 설정해두면 모두 갈아끼워짐
let fruits2 = ["살구", "복숭아", "자두", "수박"]
// console.log(fruits2)
// fruits2.splice(1, 3, "배", "망고")
// console.log(fruits2)

// 1번째부터 2번째까지의 값을 반환
let slicedFruits = fruits2.splice(1, 4);
console.log(slicedFruits)

// forEach, map, filter, find
let numbers =[1, 2, 3, 4, 5, 6, 7]
// 매개변수자리에 함수를 넣는것 : 콜백 함수
// 1. forEach
numbers.forEach((item) => {
    console.log(item)
})

// 2. map
// forEach와 다른점은 반드시 함수문에 return문을 가져야 한다.
// 기존의 배열을 가공해서 새로운 배열을 만들기 위햄
// 항상 원본 배열의 길이만큼이 return된다.
let newNumbers = numbers.map((item) =>  {
    return item * 2;
})

console.log(newNumbers)

// 3. filter
// return값에 조건문이 들어간다.
let numbers3 = [2, 4, 1, 2, 5, 6]
let filterNum = numbers3.filter((item) => {
    return item !== 5;
})

console.log(filterNum)

// 4. find 
// filter처럼 조건문이 들어가지만 
// 맨 처음 조건에 만족하는 값만 리턴한다.
let findNum = numbers3.find((item) => {
    return item > 3; 
})

console.log(findNum)