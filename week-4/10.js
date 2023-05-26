// 많은 콜백함수를 대체 
// 기명함수로 변환 
// 변수이름을 하나하나 붙여주는데 시간과 노력이 낭비 
var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');