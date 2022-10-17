// 자바스크립트에서 함수는 만능이다
// 함수처럼 사용도 가능하고 생성자 함수로 사용도 가능하다(클래스 대체)
// 하지만, 이걸 위해 불필요한 프로토타입(많은 데이터를 담고있는 객체)이라는 무거운 오브젝트가 생긴다.

// const dog = {
//     name: 'Dog',
//     play: function () {
//         console.log('멍멍')
//     }
// }
// dog.play()
// const obj = new dog.play();
// console.log(obj) // 이러면 불필요한 프로토타입이 배정됨, 에러는 안난다!!

// 이대신 arrow함수를 사용하면 됨
const dog = {
        name: 'Dog',
        play: () => {
            console.log('멍멍')
        }
    }
dog.play()
// const obj = new dog.play(); // 여기서도 에러가 난다.
// arrow함수로 정의하면 생성자 함수 처럼 사용을 못한다.
// console.log(obj)

// 그래서 ES6에 메서드가 나옴
const cat = {
    name:'cat',
    play() {
        console.log('야옹') // 키-벨류(함수)가 아닌 객체의 메서드로서 이렇게 정의함
    }
}
cat.play()
// const obj1 = new cat.play() // 이러면 에러가 난다.
// cat.play()는 생성자가 아닌데 객체를 만들려고 했기 때문
// 메서드로 정의하면 생성자 함수로 사용할 수 없다.


/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 않음)
 * 3. 함수 자체 arguments를 가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

// 일반함수에서는 arguments라는 객체가 있어서
// 전달된 인자에 대한 정보를 가지고 있다.
function sum(a,b) {
    console.log(arguments)
}
sum(1,2)

// 하지만 arrow 함수로 정의하면
// 함수를 감싸고있는(지금은 전역) 객체의 arguments를 출력한다.
// 현재는 노드환경이므로 노드가 실행할 때 전달받은 인자를 출력한다.
const add = (a,b) => {
    console.log(arguments)
}
add(1,2)

// 여기서 화살표함수 안의 this는 바로 위 스코프인 전역의
// 즉, 노드환경에서는 모듈에 대한 정보를 출력한다( {} )
const printArrow = () => {
    console.log(this)
}
printArrow()

cat.printArrow = printArrow
cat.printArrow() // 여기서도 여전히 노드모듈에 대한 정보를 출력한다.
