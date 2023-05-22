// 2. 문자 : String(문자열 = 문자의 나열)
// ' ' = " "
let str = "Hello World";
// 문자열 길이확인
console.log(str.length);

// 2-2. 문자열 결합하기
// concat함수
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2)
// console.log(result);


// 2-3. 문자열 자르기
let str3 = "Hello, World";

// substr함수
// substr(어디까지 자르고, 몇개까지 볼지)
// console.log(str3[0]);
console.log(str3.substr(7, 5));

// slice함수
// slice(어디서 부터, 몇번째까지 보여줄지)
console.log(str3.slice(7, 11));

// 2-4. 문자열 검색 
let str4 = "Hello, World"
// search함수("찾고자 하는 단어") => 그 단어가 시작되는 순서를 return 해준다.
console.log("search = ", str4.search("World"));

// 2.5.문자열 대체
let str5 = "Hello, World!";
// replace함수("대체하고자하는 문자열", "대체되는 문자열")
let result01 = str5.replace("World", "자바스크립트");
console.log('replace = ', result01);

// 2-6. 문자열 분할
let str6 = "apple , banana , kiwi"
// split함("무엇을 기준으로 분할할지") => ex("a") : [ '', 'pple , b', 'n', 'n', ' , kiwi' ]
// "a"는 사라지고 "a"기 있던 자리를 기준으로 ,로 나누어지면서 문자열에서 배열로 바뀐다.
let result02 = str6.split("a")
console.log("split = ", result02);