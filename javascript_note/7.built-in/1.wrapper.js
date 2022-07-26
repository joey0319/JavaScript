// 래퍼 객체(wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
// 값을 만들때마다 객체를 생성하면 차지하는 메모리가 많아서
// 무거워진다. 그래서 필요할 때만 객체로 감싸진다.

const number = 123; // number 원시 타입
// .을찍는 순간 number 원시타입을 감싸고 있는 Number 객체로 감싸진다.
console.log(number.toString()); 
console.log(number) // 이때는 필요하지 않으므로 그대로 그냥 number 원시타입이다.

const text = 'text'; // string 문자열 원시타입
console.log(text);
console.log(text.length) // 이렇게 하는 순간 String 객체로 감싸진다.