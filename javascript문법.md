# 목차
- [블록스코프](#1-블록스코프)
- [호이스팅](#2-호이스팅)
- [원시타입 vs 참조타입](#3-원시타입-vs-참조타입)
- [undefined vs null](#4-undefined-vs-null)
- [함수 선언식 vs 표현식](#5-함수-선언식-vs-표현식)
- [this 공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- [AJAX](#6-AJAX)
- [Single-Threaded Javascript](#7-single-threaded-javascript)
- [콜백함수 vs Promise](#8-콜백함수-vs-promise-async-await)

## 1. 블록스코프

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



## 2. 호이스팅

변수를 선언 이전에 참조할 수 있는 현상 / 변수가 나중에 선언되어 있다면 선언 전에 undefined를 반환한다.

var로 변수를 선언 및 할당할 때만 일어나는 현상

```javascript
console.log(username) //undefined
var username = 'robot'

console.log(email) // 에러가 난다.
let email = 'abc'
```



## 3. 원시타입 vs 참조타입

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



```javascript
let message = ['안녕하세요']

let greeting = message
console.log(greeting) // ['안녕하세요']

message[0] = 'hello'
console.log(greeting) // ['hello']
```

위의 코드처럼 참조타입은 변수에 참조값이 담기므로 출력내용이 변한다.

## 4. undefined vs null

1. undefined
   - 빈 값을 표시하는 데이터 타입
   - 변수 선언 시 아무 값도 할당하지 않으면 자동으로 undefined 할당
2. null
   - 빈 값을 표시하는 데이터 타입
   - 개발자가 의도적으로 필요한 경우 할당
   - typeof 결과는 object



## 5. 함수 선언식 vs 표현식

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





## 6. AJAX

1. AJAX란?
   - Asynchronous JavaScript And XML (비동기식 javasciprt와 xml)
   - 서버와 통신하기 위해 XMLHttpRequest 객체를 활용
   - AJAX의 X가 XML을 의미하긴 하지만 모든 종류의 데이터를 가져올 수 있고 요즘은 JSON을 더 많이 사용한다.
2. 특징
   - 페이지 전체를 새로고침 안해도 수행되는 **비동기성**
   - 페이지 새로고침 없이 서버에 요청, 데이터를 받아 작업을 수행

3. 비동기성 예시
   - 메일을 전송하고 처리 되기 전에 다른 페이지로 넘어가도 메일은 전송된다
   - 지도 앱에서 스크롤을 하는 모든 행위가 요청이지만 페이지는 갱신되지 않는다.

4. XMLHttpRequest 객체란?
   - [공식문서](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)
   - 서버와 상호작용하기 위해 사용됨
   - XHR을 사용하면 페이지 새로고침 없이 URL에서 데이터 가져올 수 있음



## 7. Single-Threaded Javascript

1. Treads

   - 프로그램이 작업을 완료하기 위해 사용할 수 있는 단일 프로세스
   - 각 thread는 한번에 하나의 작업만 수행가능
   - 하지만 컴퓨터 CPU는 여러개의 코어를 가지고 있어 한번에 여러가지 일 처리 가능

2. single-threaded javascript

   - 컴퓨터가 여러개의 CPU를 가지고 있어도 javascript는 main thread에서만 작업 수행
   - **이벤트를 처리하는 Call Stack이 하나인 언어이다.**

3. single-threaded javascript의 이벤트 처리 로직

   - Call Stack : 요청이 들어올 때마다 해당요청을 순차적으로 처리하는 LIFO 자료구조(최근거 먼저)

   - Web API : JavaScript 엔진이 브라우저에서 제공하는 API

     ​				 즉시 처리하지 못한 이벤트들을 Web API로 보내서 처리하게 함 ex) setTimeout()

   - Task Queue : Web API에서 처리된 순서대로 callback함수가 대기하는 FIFO 자료구조

   - Event Loop : Call Stack이 비어있는지 확인하고 비어 있으면 Task Queue에 대기중인 callback 함수가 있는 확인 Task Queue에 대기중인 callback 함수가 있다면 가장 앞에 있는(가장 먼저 들어온) callback 함수를 Call Stack으로 푸쉬한다.

4. 순차적인 비동기 처리
   - 문제점 : Web API로 들어온 순서는 중요하지 않고 누가 먼저 처리되느냐고 중요(실행 순서 불명확)
   - 해결방법
     - Async callbacks : 백그라운드에서 실행을 시작할 함수를 호출할 때 인자로 지정된 함수
     - promise-style : XMLHttpRequest 객체를 사용한 현대적인 버전



## 8. 콜백함수 vs Promise vs Async Await

1. 콜백함수

   - 비동기 로직을 수행할 때 필수적이다.
   - 콜백함수를 다른 함수의 매개변수로 전달하여 해당 함수 내에서 특정 시점에 호출한다.

   - 예시

     ```javascript
     const btn = document.querySelector('button')
     
     btn.addEventListener('click', function () {
         alert('Click!!')
     })
     ```

     위의 예시에서 addEventListner 함수 안에서 alert를 하는 익명함수가 콜백함수이다.

   - 함수 내부에 콜백함수가 많아질수록 callback Hell

2. Promise

   - [공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

   - 비동기 작업이 맞이할 미래의 최종 완료 or 실패와 그 결과값을 나타내는 객체
   - 미래의 어떤 시점에 결과를 제공하겠다는 약속을 반환한다.
   - promise의 상태
     - pending : 대기
     - fullfilled : 성공
     - rejected : 실패
   - 
   - .then(callback)
     - 이전 작업이 성공했을 때 수행할 작업을 나타내는 callback 함수
     - 각 callback 함수는 이전 작업의 성공 결과를 인자로 받는다.
     - .then을 여러개 사용하여 비동기 작업을 차례대로 수행 할 수 있다.
     - **반환값이 반드시 있어야 callback 함수가 이전 작업의 결과를 받을 수 있다.**
   - .catch(callback)
     - .then이 하나라도 실패하면 동작한다.
     - 이전 작업의 실패로 인해 생성된 error 객체는 catch 블록안에서 사용 가능