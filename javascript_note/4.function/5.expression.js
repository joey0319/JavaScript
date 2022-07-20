// 함수 선언문 function name () { }

// 함수 표현식 const name = function () { }
// 함수도 객체이기 때문에 변수에 할당이 가능하다.
let add = function (a,b) {
    return a+b;
};

// 화살표 함수 const name = () => { }
add = (a,b) => {
    return a+b;
}

// return만 한다면 괄호와 return을 생략가능하다.
add = (a,b) => a+b;

// 생성자 함수 const object = new Function();

// IIFE(Immediately-Invoked Function Expressions)
// 함수를 생성하자마자 호출하고 싶을 때
(function run() {
    console.log('yes')
})();