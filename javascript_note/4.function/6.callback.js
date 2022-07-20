// 일급객체
// 함수의 매개변수로 전달 가능
// 힘수자체가 다른 함수의 반환값이 될 수 있음
// 할당명령문 다른 변수에 함수를 할당할 수 있다.
// 동일 비교대상
// 함수와 객체가 일급객체이다.

// 고차함수
// 인자로 함수를 받거나(콜백함수)
// 함수를 반환하는 함수를 고차함수라고 한다.

// 콜백함수
const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

// 여기서 action이 콜백함수이다.
// 전달될 당시에 action 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 메모리 주소를 전달한다.
// 그리고 그 함수는 고차함수안에서 필요한 순간에 호출이 나중에 된다.
function caculator (a,b,action) {
    if (a<0 || b<0) {
        return;
    }
    let result = action(a,b);
    console.log(result)
    return result;
}

caculator(-1, 2, add); // 이러면 호출조차 되지 않는다.
caculator(1,4,multiply);