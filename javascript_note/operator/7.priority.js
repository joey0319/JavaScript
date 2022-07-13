// 연산자 우선순위

let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 14 연산자 우선순위가 *가 높아서

result = a++ + b * 4;
console.log(result); // 14 필요한 연산을 다하고 a++ 되기 때문에