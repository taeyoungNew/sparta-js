// 구조분해 할당 : destructure(de + structure + ing)
// de ==  not
// structure == 구조
// 배열이나 객체의 속성을 분해하여 하나하나 값을 떼어내
// 변수에 담는

// 1) 배열의 경우
let [value, value2] = [1, "new"];
// value에는 숫자1이 value2에는 "new"가 할당된다.

// console.log("1", value);
// console.log("2", value2);

// 배열을 먼저 만들고
let arr = ["value1", "value2", "value3", "valuie4"];
// 변수 3개에 
// 아래 d에 4를 할당하여도 arr의 3번쨰 값이 있다면 그걸로 할당이 된다.
let [a, b, c, d = 4] = arr;
// 넣을 값이 변수보다 적으면 할당되지 못한 변수는 undefined가 할당된다.
// console.log(a, b, c, d);

// (2) 객체인 경우 
let user = {
    name: '태영',
    age: 30,
    birthday: "08/25"
};
// 구조분해시 할당하려는 변수네임과 key네임이 같아야한다.
// let { name, age } = {
//     name: '태영',
//     age: 30
// }

// console.log(name, age)

// 새로운 이름으로 할당
// newName, newAge에 값이 할당된다.
let {
    name: newName,
    age: newAge
} = user;


// console.log(newName, newAge);

// 값을 할당하는 객체에 값이 없다면 undefined
let { name, age, birthday } = user;
console.log(name, age, birthday)
// 