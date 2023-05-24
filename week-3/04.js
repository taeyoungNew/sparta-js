// let copyObj = function (target) {
//     let result = {};
//     for (let pop in target) {
//         result[pop] = target[pop];
//     }    

//     return result;
// };


let user = {
    name: "taeyoung",
    age: "male",
    birthday: "0525",
    obj: {
        favorite: "chicken",
        address: "dndbxhd10@hanmail.net"
    }
    
}

// 재귀함수
let copyObj = function (target) {
    let result = {};
    // typeof로 target이 object면 
    if(typeof target === 'object' && target !== null) {
        for (let pop in target) {
            result[pop] = copyObj(target[pop]);
        }    
    // target이 기본형이면
    } else {
        result = target;
    }
    

    return result;
};




let user2 = copyObj(user);

// console.log(user2);
user.name = "봄이";
user.age = 12

console.log('user = ', user);
console.log('user2 = ', user2);

// if(user2 === user) {
//     console.log("같은 변수?")
// } else {
//     console.log("다른 변수")
// }

