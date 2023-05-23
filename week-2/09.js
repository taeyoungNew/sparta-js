// Map을 선언하는 방법
const myMap = new Map();
// 선언한 Map에 값을 할당하는 방법
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);
myMap.set('four', 4);
myMap.set('five', 5);

// key를 출력하는 반복자
// for(const data of myMap.keys()) { 
//     console.log(data);
// }

// //  value를 출력하는 반복자
// for(const data of myMap.values()) {
//     console.log(data)
// }

// // key와 value를  배열로 하나하나 출력해주는 반복자
// // 
// for(const data of myMap.entries()) {
//     console.log(data)
// }

// Map의 크기를 확인하는 방법
console.log(myMap.size);
// Map안의 값을 검색하는 방법
// 괄호안에 key이름을 넣는다. 
console.log(myMap.has('two'));