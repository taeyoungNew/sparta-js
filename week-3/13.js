// apply의 두번째 인자로 배열을 받음
// apply -> ({}, []);
let numbers = [10, 20, 3, 14, 51];

// 이렇게 좋은 코드가 있었다니
let max = Math.max.apply(null, numbers);
let min = Math.min.apply(null, numbers);
console.log(max, min)

// apply없이 spread operator
// console.log(...numbers);
let max2 = Math.max(...numbers);
let min2 = Math.min(...numbers);
console.log(max2, min2)