// 객체를 만드는 세가지 방법
// key에는 문자, 숫자, 문자열, 심볼 가능
// value에는 원시값, 객체, 함수 가능

// Obj literal { key: value }
let apple = {
    name: 'apple',
    hello: 'hi',
}

// 속성, 데이터에 접근하는 방법
console.log(apple.name) // 마침표 표기법
console.log(apple['hello']); // 대괄호 표기법 -> 동적으로 속성에 접근하고 싶을 때 주로 사용

// 속성 추가
apple.emoji = 'fine';
console.log(apple.emoji)

// 속성 삭제
delete apple.emoji;
console.log(apple)
// new Object ()

// Object.create();