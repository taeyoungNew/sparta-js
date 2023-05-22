// 객체
// key : value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.
// 함수와 객체 배열도 넣을 수 있다.
// let person = {
//     name : "민태영",
//     age : 30,
//     gender: "남자"
// }

//  1-2, 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
// // 생성자함수를 사용하는 법
let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 20, "여자")

// console.log(person1, person2)

// // 2.접근하는 방법
// // console.log("1", person.name);

// // 3. 객체메소드(객체가 가진 여러가지 기능 : Object.~~~)
// // 3-1.Object.key() : key들을 가져오는 메소드
// let keys = Object.keys(person);
// console.log(keys)

// // 3-2. values 
// // 객체안에 있는 값들을 가져오는 메소드
// let values = Object.values(person);
// console.log("values => ", values)

// // 3-3 entries
// // key와 value를 묶어서 배열형태로 반환
// let entris = Object.entries(person);
// console.log('entries = ', entris);

// // 3-4 assign
// // 객체를 복사
// let newPerson = {};
// // assign(어느 변수에 복사할지, 어느 변수의 값을 복사할지, { key : "바꾸고 싶은 값" })
// Object.assign(newPerson, person, { age : 31 });
// console.log('newPerson', newPerson);

// 3-5 객체 비교
// 크기가 상당히 크기때문에 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소를 가지고 있기 때문에
// 두 객체가 가리키는 주소가 다르기때문에ㅜ false를 반환한다.
// let person = {
//     name : "민태영",
//     age : 30,
//     gender: "남자"
// }


// let person2 = {
//     name : "민태영",
//     age : 30,
//     gender: "남자"

// }

// console.log(person ===  person2)

// // JSON.stringify => 객체를 문자열 시켜 서로 비교 할수 있게 할 수 있다.
// console.log(JSON.stringify(person) === JSON.stringify(person2))


// 3-6객체 병합
// let person1 = {
//     name : "민태영",
//     age : 30,
    
// }


// let person2 = {
//     gender: "남자"

// }
// ...: spread operator
let perfectMan = {...person1, ...person2}
console.log(perfectMan)

