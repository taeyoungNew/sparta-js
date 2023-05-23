// 일급객체로써의 함수 (2)
const person = {
    name: '태영',
    age: 31,
    isMarried: true,
    // 화살표함수는 this를 바인딩 하지 않는다.
    // sayHello: () => {
    //     // 자신이 속해있는 객체를 가리킬때 this.을 써준다.
    //     console.log(`안녕하세요.${this.name}입니다.`);
    // }
    sayHello: function() {
        // 자신이 속해있는 객체를 가리킬때 this.을 써준다.
        console.log(`안녕하세요.${this.name}입니다.`);
    }
};

person.sayHello();
