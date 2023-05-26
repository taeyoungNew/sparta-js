// bind : this를 바인딩하여 새로운 함수를 리턴해준다.
let obj1 = {
    name: 'obj1',
    func: function () {
        console.log(this.name);
    }
}

// console.log(obj1.func.bind(obj1))
let boundObj1 = obj1.func.bind(obj1)
setTimeout(obj1.func.bind(obj1), 1000)

// 함수자체를 바인딩 하기
let obj2 = {
    name: 'obj2'
};

setTimeout(obj1.func.bind(obj2), 1000)