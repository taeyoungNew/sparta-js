// call과 apply 세부내용
// 공통된 내용을 함수로 만들고
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

// call을 이용하여 다른 함수에서 호출하여 새로운 인스턴스를 생성한다.
function Student(name, gender, school) {
    // this는 Person을 가리킴?
    // call을 안쓰면 this가 바인딩이 안되어 인스턴스가 생성이 안된다.
    // Person.call(name, gender)
    Person.call(this, name, gender)
    // this.name = name;
    // this.gender = gender;
    this.school = school;
}

function Employee(name, gender, company) {
    Person.call(this, name, gender);
    // this.name = name;
    // this.gender = gender;
    this.company = company
}

var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');

console.log(kd, ks)

