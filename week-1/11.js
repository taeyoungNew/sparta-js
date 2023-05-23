// 조건문(if, else if, else, swich)
// 1. if
// let x = 10;
// if(x > 100) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // 1-2
// let y = "Hello world";

// if(y.length >= 5) {
//     console.log('5보다 크다')
// }



// let x = 11;
// // 2. if - else 문
// if(x > 0) {
//     console.log('x는 양수입니다.')
// } else {
//     console.log('x는 음수입니다')
// }


let x = -1 
if(x < 0) {
    console.log("1")
} else if(x >= 0 && x < 10) {
    console.log("2")
} else {
    console.log("3")
}
// 1-4 switch
// 변수의 값에 따라 여러개의 경우(case) 중 하나를 선택
// default 
let fruit = "수박";
switch (fruit) {
    case "사과":
        console.log("사과입니다.");
        break;
    case "바나나":
        console.log("바나나입니다.")
        break;
    case "키위":
        console.log("키위입니다.")
        break;
    case "수박":
        console.log("수박입니다.")
        break;
    default:
        console.log("과일이아님")
        break;
}