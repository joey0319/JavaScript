/**
 * 글로벌 컨텍스트의 this
 * - 브라우저에서 : window를 가르킨다
 * - 노드에서 : 모듈을 가르킨다.
 * 
 */

// 노드에서 아래와같이 모듈이 출력된다.
const x = 0;
module.exports.x = x;
console.log(this) // 브라우저에서는 window가 출력된다.
console.log(globalThis) // 브라우저에서는 window가 출력된다.

console.clear()

/**
 * 함수 내부에서의 this
 * 엄격모드가 아닌경우 그냥 글로벌을 가리킴
 * 엄격모드의 경우 undefined가 됨
 */

function fun() {
    console.log(this) // 노드에서는 globalthis가 출력된다, 브라우저에서는 윈도우가 출력된다.
}
fun()


/**
 * 생성자 함수 또는 클래스에서의 this는 앞으로 생성될 인스턴스 자첼르 가리킨다.
 * 
 */

// Cat이라는 생성자 함수 내부에 pintName함수가 있다.
function Cat(name) {
    this.name = name;
    this.printName = function() {
        console.log(this.name) // 여기서 this.name은 앞으로 만들어질 인스턴스(=cat1, cat2)의 cat1.name을 가르키고 있다.
    }
}
const cat1 = new Cat('냐옹')
const cat2 = new Cat('냐옹냐옹')
cat1.printName()
cat2.printName()