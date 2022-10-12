// 엄격모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격모드임

// 자바스크립트는 아래와 같이 적용해줘야 함
'use strict';

// 엄격모드를 적용안하면 아래가 정상적으로 작동한다.
const array = [1,2,3]
for (num of array) {
    console.log(num)
}

// 엄격모드 사용시 아래와 같이 사용해야 함
const array1 = [1,2,3]
for (const num of array1) {
    console.log(num)
}
