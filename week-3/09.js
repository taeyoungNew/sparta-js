var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y)
    }
}
// method  함수 안의 this는 항상obj
obj.method(2, 3)

// call()메서드는 명시적으로 this를 정할 수 있다. 
// call은 기존메서드 뒤에 붙어 즉시실행으 해주되 앞에 this로 묶을 객체를 
// 붙여주고 나서 나머지 매개변수를 넣어준다. 
obj.method.call({a : 4}, 12, 42)

// apply
// call과 동일하게 즉시실행하는 메서드이다
obj.method.apply({a : 4}, [12, 42])


