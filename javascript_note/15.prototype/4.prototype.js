const dog1 = {name: '뭉치', emoji: '🐶'}
const dog2 = {name: '코코', emoji: '😺'}

// 원래는 아래와 같이 dog를 만들었다.
function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // 아래 printName 함수는 인스턴스 레벨의 함수이다.
    // 만들어진 인스턴스마다 이 함수를 모두 가지고 있다.
    // 객체와 상관없이 똑같은 기능을 하는데 모두 가지고 있으면 메모리 낭비이다.
    // 이것을 방지하기 위해 프로토타입 레벨의 함수로 만들 수 있다!!!
    
    // this.printName = () => {
    //     console.log(`${this.name} ${this.emoji}`)
    // };
}

// 프로토타입 레벨의 함수 만들기
Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`)
}

const dog3 = new Dog('뭉치', '🐶')
const dog4 = new Dog('코코', '😺')
console.log(dog3, dog4)
dog3.printName();
dog4.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면(오버라이딩)
// 프로토타입 레벨(부모)의 함수의 프로퍼티는 가려진다.(섀도잉 된다.)

dog3.printName = function () {
    console.log('안녕!!')
}
dog3.printName()

// 정적 레벨
Dog.hello = () => {
    console.log('hello')
}
// dog3.hello() -> 이렇게 하면 접근이 안된다.
Dog.hello() // 이렇게 해야 접근이 된다.
Dog.MAX_AGE = 20; 

