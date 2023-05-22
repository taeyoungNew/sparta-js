// for, while => ~동안 : 반복문

// 배열과 for문은 짝꿍이다.
// const arr = ["사과", "호박", "자두", "코코넛", "복숭아", "망고", "수박",]
// for(let idx = 0; idx < arr.length; idx++) {
//     console.log(arr[idx])
// }

// ex: 0분터 10까지의 수 중에서 2의 배수만 console.log()로 출력하는 예시
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let idx = 0; idx < arr.length; idx++) {
    if(arr[idx] % 2 === 0) {
        if(arr[idx] !== 0) {
            console.log(arr[idx])

        }
    }
}

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
    name : "Jone",
    age: 30,
    gender : "male"
};
// 여기서 변수 key는 객체안의 key들을 가리킨다.
// 
for(let key in person) {
    // console.log(person.key)
    console.log(`${key} : ${person[key]}`)
    // **** console.log(`${key} : ${person.key}`)<= 이 표현식이 안되네 ㄷㄷㄷ 신기허넫ㄷㄷㄷㄷ
    
}

// console.log(person.name)