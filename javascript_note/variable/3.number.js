// 숫자타입 아무거나 할당 가능하다
let interger = 123; //정수
let negative = -123; // 음수
let double = 1.23; // 실수

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

// 나눗셈할 때만 주의하면 된다.
console.log(123/0) // infinity
console.log(123/'text') // NaN

// 원시타입이 안정적으로 나타낼 수 있는 2**53 - 1보다 큰 수를 나타내고 싶으면
// Bigint를 사용한다.
let bigInt = 123454566245645514363444556342344567344234545645650n; 