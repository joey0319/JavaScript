const num1 = 123;
// 아래와 같이 객체를 만드는것은 낭비이다.
// 필요할때만 감싸주게 하는것이 좋다.
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2) // object

console.log(Number.MAX_VALUE); // 우리가 사용할 수 있는 가장큰수
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)


// 지수표기법
const num3 = 102;
console.log(num3.toExponential())

// 반올림하여 문자열로 변환
const num4 = 1234.12
console.log(num4.toFixed())
console.log(num4.toString())
console.log(num4.toLocaleString('ar-EG')) // 그나라의 언어에 맞게 숫자를 변환

// 원하는 자리수까지 유효하도록 반올림
console.log(num4.toPrecision(5)) // 1234.12가 1234.1만 출력된다.

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
    console.log(Number.EPSILON)
}

// 부동소수점 오차 확인법
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.1이 아닌 0.100000003이 나온다.
// 소수를 이진법으로 나타내다 보니 나타나는 오차이다.
// 이러한 작은오차를 나타내는것이 EPSILON이다.

function isEqual (original, expected) {
    return original === expected;
}
console.log(isEqual(1,1));
console.log(isEqual(0.1,0.1))
console.log(isEqual(num, 0.1)) // false가 나온다.
// num은 0.10000003이기 때문

// 저값을 true로 보고싶으면 함수를 아래와 같이 작성해야한다.
function isEqual (original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}