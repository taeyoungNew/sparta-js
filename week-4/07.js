// 콜백 함수 내부의 this에 다른 값 바인딩하기
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 하려면?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법


// this를 우회하여 this가 원하는 값을 바라보게하기
let obj1 ={
    name: "obj1",
    func: function () {
        let self = this;
        return function () {
            console.log(self.name);
        }
    }
}

let obj3 = {
    name: 'obj3',
    // func: obj1.func
}


let callback = obj1.func.call(obj3);
setTimeout(callback, 1000)


// closure방식
// let obj1 ={
//     name: "obj1",
//     func: function () {
//         let self = this;
//         return function () {
//             console.log(self.name);
//         }
//     }
// }

// let callback = obj1.func();
// setTimeout(callback, 1000)





// 결과만을 위한 코딩 = > 하드코딩 이런 코드는 지양해야한다.
// let obj2 = {
//     name: "obj2",
//     func: function () {
//         console.log(obj2.name)
//     }
// }
// // let callback2 = obj2.func();
// setTimeout(obj2.func, 1000)
