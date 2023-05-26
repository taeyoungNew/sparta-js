//  
let numbers = [10, 20, 3, 14, 51];
let max = min = numbers[0]; // 10

numbers.forEach(function(num) {
    // 현재 들어가는 숫자가 max보다 큰 경우
    if(num > max) {
        max = num;
    } else if(num < min) {
        min = num
    }
})

console.log(max, min)

