// 먼저 블록을 보자 loop 함수 블록, for 문 블록, console 찍는 내부함수 블록이 있다.
// 이때 array에 push 될 때 console찍는 내부함수가 push 되는데
// 클로저에 의해 외부(for문 블록)의 i 정보도 함께 push가 된다.
// 그래서 let으로 하면 i가 계속 바뀌어서 0,1,2,3,4가 출력되고
// var로 하면 블록 스코프가 없기 때문에(var는 함수 스코프만 가지고 있음)
// 그래서 var로 정의할 시 i는 최종적으로 i가 증가한 다음인 5를 가르키고 있다.


function loop () {
    const array = [];
    // var와 let의 차이점
    // let을 사용하면 0,1,2,3,4
    // var를 사용하면 5,5,5,5,5가 출력된다.

    for (let i = 0; i < 5; i++) {
        array.push(function () {
            console.log(i);
        })
    }
    return array
}

const array = loop();
array.forEach((func) => func())