// scope란 식별자가 유효한 범위이다.
// 코드 블럭 : { }, if () { }, for () { }, function() { }

// 블럭 외부에서는 블럭 내부 변수를 참조할 수 없다.
{
    const a = 'a';
    console.log(a)
}

const b = 'b'
// console.log(a) 이렇게 하면 crushed됨 a 변수는 블럭 안에서만 유효하기 때문


// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
    const message = 'hello world';
    console.log(message)
}
// console.log(message)는 충돌이 남

// 함수 외부에서는 함수의 매개변수를 참조할 수 없음
function sum(a,b) {
    console.log(a,b)
}
// console.log(a,b)는 충돌이 남