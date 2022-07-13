// 활용 예
let isFree = true;
let isActivated = false;
let isEnrolled = true;

// 거짓인 값
// 데이터를 불리언 타입으로 바꾸고 싶으면 !!을 붙여준다.
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN) // false


// 참인 값
console.log(!!Infinity);
console.log(!!{});