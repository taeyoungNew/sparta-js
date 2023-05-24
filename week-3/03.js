// 얕은 복사패턴
// target은 객체
let copyObject = function (target) {
    let result = {};
    // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다. 
    // 하드코딩을 하지 않아도 괜찮음 
    // 이 copyObject로 복사를 한 다음 복사를 완료한 객체의 프로퍼티를 변경하면 된다.

    // for in 은 객체의키값에 하나하나접근하는 문 
    for(let prop in target) {
        result[prop] = target[prop];
    }
    return result;
}

let obj = {
    name : "봄이",
    age : 12,
    
}

console.log(copyObject(obj));