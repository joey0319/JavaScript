// 클로저란?
// 함수와 렉시컬 환경의 조합이다.
// 클로저는 내부 함수 스코프에서 외부함수 스코프로 접근할 수 있게 해준다.

// 지금까지 배운 스코프
// 내부에서 외부는 접근 가능하다.
// 외부에서 내부는 접근 불가능하다.
const text = 'hello'
function func() {
    console.log(text);
}
func()


function outer () {
    const x = 0;
    function inner() {
        console.log(`inside inner : ${x}`)
        // 내부함수 inner는 외부함수 outer의 변수 x에 접근이 가능하다.
    }
    inner();
}
outer()


// 아래와 같이 코드를 쓸 때 똑같이 inside inner가 출력되는 이유는
// return inner가 반한될 때 클로져에 의해 outer함수의 렉시컬 환경도 함께 반환되므로
// inner에서 outer의 변수 x에 접근이 가능하다
function outer () {
    const x = 0;
    function inner() {
        console.log(`inside inner : ${x}`)
    }
    return inner;
}
const func1 = outer();
func1();