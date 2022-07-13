// 문자열 타입
let string = '안녕하세요';
string = `안녕`; // 백틱 사용가능

string = "'안녕'"; // 따옴표 자체를 넣고 싶으면 이런식으로

// 특수문자 출력하는 방법
string = '안녕!\n엘리야!'
console.log(string)

string = '안녕\t엘리야!'
console.log(string)

// 템플릿 리터럴 (백틱을 활용한다.)
let id = '엘리';
let greetings = `안녕, ${id}`
console.log(greetings)


