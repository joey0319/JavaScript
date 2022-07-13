// 원시타입은 값이 복사되어 전달됨 (copy by value)

let a = 1; // a는 저장된 메모리 주소를 가르키고 그 메모리주소에는 1이 저장됨
let b = a;
b = 2;
console.log(a)
console.log(b)

// 객체타입은 참조값(메모리주소)가 복사되어 전달된다. (copy by reference)
let apple = {
    name: '사과'
};
/** 
 * 객체타입은 apple이 메모리 주소를 가르키고 있고
 * 그 안에는 heap영역의 메모리 주소가 저장되어 있다.
 * 그리고 heap영역의 메모리 주소에 객체가 저장되어 있다.
 * */ 

let orange = apple;
// 이렇게 하면 apple이 참조하고 있는 heap영역의 메모리 주소값이 복사됨

apple.name = 'orange';
// 이렇게 하면 heap영역에 저장되어 있는 apple 객체의 이름이 바뀐다.

console.log(apple)
console.log(orange)