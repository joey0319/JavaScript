// 생성자 함수에서 this는 앞으로 만들어질 인스턴스 자기 자신을 가르킨다.

function Cat(name) {
    this.name = name; // 현재 this는 누구를 가르키는지 모른다. 왜냐하면 앞으로 만들어질!! 인스턴스를 가르키기 때문
    this.printName = function() {
        console.log(`고양이 이름을 출력한다: ${this.name}`)
    }
}

const cat = new Cat('야옹')
// 이렇게 한순간 this는 cat 인스턴스를 가르키고 this(cat).name은 전달받은 '야옹'이된다.

// this 바인딩
// 자바, c#, c++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정된다!!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라 this가 달라진다!
// 즉, this는 호출하는 사람(caller)에 의해 동적!!!으로 결정된다!

function Dog (name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지의 이름을 출력한다: ${this.name}`)
    }
}


const dog = new Dog('멍멍');
// dog.printName에 cat의 printName을 할당한다.
dog.printName = cat.printName;
dog.printName() // 고양이 이름을 출력한다 : 멍멍
cat.printName() // 고양이 이름을 출력한다 : 야옹
// 이렇게 된 이유는 dog.printName이 변경되어서 고양이의 이름을 출력한다가 나오지만
// console안의 this.name은 그대로 멍멍을 가르킨다(호출한 사람이 dog이므로)
// 호출한 사람이 dog이므로 this는 dog를 가르키고 dog.name인 멍멍이 출력되는것!

function printOnMonitor(printName) {
    console.log('모니터를 준비하고, 전달된 콜백을 실행');
    printName();
}

printOnMonitor(cat.printName); // this.name이 undefined로 된다.
// 그이유는 호출한 사람이 없기 때문이다.
// 만약 printOnMonitor안의 printName함수가 cat.printName()이면
// 호출한 사람이 cat이 되지만 여기서는 아무것도 없기 때문에
// undefined이다.
// 이문제를 해결하기 위해 정적 바인딩을 사용한다. 3번을 참고하자