// Set : 자료구조중 하나
// - 고유한 값을 저장하는 자료구조다.
// - 값만 저장한다. 
// - 키를 지정하지는 않는다. 
// - 값이 중복되지않는 유일한 요소호만 구성된다. 
// - 값 추가, 검색, 삭제, 모든 값 제거, 존재여부

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value4');
mySet.add('value5');
mySet.add('value6');

// set은 key가 없기 때문에 무조건 value()로 값을 출력한다.
for(const value of mySet.values()) {
    console.log(value)
}