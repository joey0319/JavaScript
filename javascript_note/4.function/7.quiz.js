// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함

let iterate = (max, action) => {
    for (let i=0; i <= max; i++) {
        action(i);
    }
}
// 5, 순회하는 숫자를 다 출력하고 싶음
let print = (a) => {console.log(a)}
iterate(5,print)
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
let multiply = (a) => {
    console.log(a*2)
}
iterate(5, multiply)

// setTimeout에 '1초뒤 이함수가 실행됩니다'라는 로그찍는 콜백함수를 인자로 전달한다.
setTimeout(()=>{
    console.log('1초뒤 이 함수가 실행됩니다.');
}, 1000);
