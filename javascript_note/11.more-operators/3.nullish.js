// Nullish Coalescing Operator
// ES11 에 추가됨
// ?? 연산자

// null과 undefined인 경우에만 뒤의 함수를 실행하고 싶을 때 사용

// num이 없을때만 -1을 출력하고 싶을 때
// 아래와 같이 쓰면 -1이 출력된다 num이 0으로 있는데 -1이 출력되버림
// 잘못된 결과
// || 연산자를 쓰면 falsy한 모든경우에 기본값이 할당되기 때문
let num = 0
console.log(num || '-1')

// 이렇게 말고 아래와 같이 쓰면 됨
console.log(num ?? -1)
let num1
console.log(num1 ?? -1)