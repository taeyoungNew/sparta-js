// 가변 : 
// A객체를 복사한 B객체에서 데이터를 변경하면 A객체의 데이터에도 영향을 끼침
let user = {
    name: "taeyoung",
    age: 31,
    hobby: {
        workout: 'mma',
        game: 'sc2'
    }
}

let user2 = user;
user2.name = "봄이"
console.log('user = ', user);
console.log('user2 = ', user2);