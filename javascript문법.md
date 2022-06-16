# 목차
- [블록스코프](#1.-블록스코프)
- [호이스팅](#2.-호이스팅)
- [원시타입 vs 참조타입](#3.-원시타입-vs-참조타입)
- [undefined vs null](#4.-undefined-vs-null)
- [함수 선언식 vs 표현식](#5.-함수-선언석-vs-표현식)
- [this 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)

## #1. 블록스코프

if, for 함수 등의 블록 스코프 내부의 변수는 바깥에서 접근 불가능

```javascript
let x = 1
if (x ===1) {
    let x = 2
    console.log(x) //2
}
console.log(x) //1
```

위의 코드에서 블록 외부에서는 함수 안에서 선언 및 할당 된 x에 접근이 불가능하기 때문에 1이 출력된다.



## #2. 호이스팅

변수를 선언 이전에 참조할 수 있는 현상 / 변수가 나중에 선언되어 있다면 선언 전에 undefined를 반환한다.

var로 변수를 선언 및 할당할 때만 일어나는 현상

```javascript
console.log(username) //undefined
var username = 'robot'

console.log(email) // 에러가 난다.
let email = 'abc'
```



## #3. 원시타입 vs 참조타입

1. 원시타입 : 객체가 아닌 기본타입 / **해당 타입의 값이 담김** / **다른 변수에 복사할 때 실제 값이 복사됨**
2. 참조타입 : 객체타입의 자료형 / **변수에 해당 참조값이 담김** / **다른변수에 복사할 때 참조 값이 복사됨** / ex) 함수, 배열, 객체

```javascript
let message = '안녕하세요'

let greeting = message
console.log(greeting) // 안녕하세요

message = 'hello'
console.log(greeting) // 안녕하세요
```

위의 코드와 같이 원시타입은 실제 해당 값이 변수에 저장되어 출력 내용이 안바뀐다.



```
let message = ['안녕하세요']

let greeting = message
console.log(greeting) // ['안녕하세요']

message = 'hello'
console.log(greeting) // ['hello']
```

위의 코드처럼 참조타입은 변수에 참조값이 담기므로 출력내용이 변한다.

## #4. undefined vs null

1. undefined
   - 빈 값을 표시하는 데이터 타입
   - 변수 선언 시 아무 값도 할당하지 않으면 자동으로 undefined 할당
2. null
   - 빈 값을 표시하는 데이터 타입
   - 개발자가 의도적으로 필요한 경우 할당
   - typeof 결과는 object



## #5. 함수 선언식 vs 표현식

1. 함수 선언식
   - 익명함수 불가능
   - 호이스팅 있음

```javascript
add(2,7) // 9 (호이스팅)
function add(num1, num2) {
    return num1 + num2
}
```



2. 함수 표현식
   - 함수 이름을 생략하고 익명함수 표현이 가능하다.
   - 호이스팅 없음

```javascript
const add  = function (num1, num2) {
    return num1 + num2
}
```

