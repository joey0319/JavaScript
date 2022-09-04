// Bubbling up, Propagating

function a() {
    throw new Error('error!')
}
// a의 에러가 b에 전파된다.
function b() {
    try {
        a()
    } catch (error) {
        console.log(error.message)
    }
}
// b의 에러가 c에 전파된다.
function c() {
    b()
}

try {
    c();
} catch (error) {
    console.log('Catched!')
}
console.log('done!')

// error를 언제 잡을 것이냐를 결정해서 잡으면 된다.
// 근접한 곳에서 잡고 싶으면 b에 써주면 된다.
// 마지막에 잡고 싶으면 c에 try catch 써주면 된다.