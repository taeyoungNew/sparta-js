// while
// let i = 0;

// i가 10보다 작을때 까지만 돌아가게 한다.
// while (i < 10) {
//     // 메인로직
//     console.log(i)
//     // 증감
//     i++
// }

// while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하라
// while (i < 100) {
//     if(i > 3 && i % 5 === 0) {
//         console.log('5의 배수', i);
//     }
//     i++;
// }

// do ~ while
// do를 먼저 실행하고 나서 while을 실행한다.
// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i < 10);

for(let idx = 0; idx <= 10; idx++) {
    if(idx === 5) {
        break;    
    }
    console.log(idx)
}