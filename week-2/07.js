function multPly(num) {
    return function (x) {
        return x * num;
    }
}

function add(x, y) {
    return x + y;
}

const multPlyTwo = multPly(10);
const multPlyThree = multPly(12);
// console.log(multPlyTwo(20));

const result = add(multPlyTwo(5), multPlyThree(2));
console.log(result)