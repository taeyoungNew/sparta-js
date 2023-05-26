// 무슨 제어권? 
// 인자에 대한 제어권을 갖는다.
// map 함수 : 배열에 대한 메서드로 
// 배열에 있는 요소들 하나하나를 순회하면서 
// idx
let newArr = [10, 20, 30].map((val, idx) => {
    // 2차원배열로 묶기
    return [idx, val] 
});

console.log(newArr);