// refactoring
// re: 다시
// 비효율적인 코드를 효율적으로 

let addCoffee = function (name) {
    return function (prevName) {
        // 안에 Promise를 새롭게 만든다.
        return new Promise(function (resolve) {
            setTimeout(function () {
                let newName = prevName ? `${prevName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500)
        })
    }
}

addCoffee('에스프레소')()
    .then(addCoffee("아메리카노"))
    .then(addCoffee("카페모카"))
    .then(addCoffee("딸기요거트"))