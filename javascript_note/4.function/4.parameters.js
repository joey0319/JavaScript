// 매개변수의 기본값은 무조건 undefined
// 필요 이상 개수의 인자가 전달되면 알아서 잘라서 인식한다.

// arguments 객체를 사용해 전달된 매개변수를 출력할 수 있다.
// 매개변수 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a=1 과 같이 부여할 수 있다.
function add (a,b) {
    console.log(a);
    console.log(b);
    console.log(arguments) // {'0': 1, '1': 2, '2': 3}
    return a+b;
}

add(1,2,3);

// Rest 매개변수 Rest Parameter
// 얼마나 많은 개수가 전달될지 모를때 인자를 배열로 전달한다.
function sum(a,b,...numbers) {
    console.log(numbers)
};
sum(1,2,3,4,54,5,6,9) // [3,4,54,5,6,9]
// 1,2sms a,b로서 전달되고 나머지는 배열로서 전달된다.