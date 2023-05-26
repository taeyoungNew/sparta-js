Array.prototype.map123 = function(callback, thisArg) {
    // map함수에서 return할 결과 배열
    let mappedArr =  [];
    for(let idx = 0; idx < this.length; idx++) {
        let mappedValue = callback.call(this.thisArg || global, this[idx]);
        mappedArr[idx] = mappedValue;
    }
    return mappedArr
};

let newArr = [1, 2, 3].map123(function(number) {
    return number * 2;
});