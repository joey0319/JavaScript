function a() {
    for (let i=0; i<100000000000000000000; i++);
    return 1;
}

function b() {
    return a() +1;
}

function c() {
    return b() +1;
}

console.log('시작했다.')
const result = c();
console.log(result)

// 이상황에서 c를 호출하면 callstack에 밑에서부터 c,b,a순으로 쌓여있다.
// 기본적으로 자바스크립트는 싱글스레드라서 하나씩 실행된다.
// c를 호출하면 b를 호출하고 a를 호출하는데
// a에 위와같이 오래 걸리는 과정이 있으면 a가 다 수행되어야 결과물을 받을 수 잇다.
// 이것이 바로 동기적이라는 것