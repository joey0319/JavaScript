// 프로토타입 기반의 객체지향 프로그래밍
function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`)
}

function Dog(name, emoji, owner) {
    // super와 같은 문법이 있다.
    Animal.call(this, name, emoji);
    this.owner = owner
}
// Animal Prototype을 상속받아 Dog를 생성(프로토타입을 연결하는 코드)
Dog.prototype = Object.create(Animal.prototype);


Dog.prototype.play = () => {
    console.log('같이 놀자!')
};

function Tiger(name, emoji) {
    Animal.call(this, name, emoji);
}
// Tiger는 Animal을 상속 받는다.(프로토타입을 연결하는 코드)
Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.hunt = () => {
    console.log('사냥하자!')
}

const dog1 = new Dog('멍멍', '🐶', '동주');
dog1.printName()

const tiger1 = new Tiger('어흥', '😺')
tiger1.hunt()
tiger1.printName()

// 누구의 인스턴스인지 확인하는 방법
console.log(dog1 instanceof Dog) // true
console.log(dog1 instanceof Animal) //true
console.log(dog1 instanceof Tiger) //false

console.log(tiger1 instanceof Dog) // false
console.log(tiger1 instanceof Animal) //true
console.log(tiger1 instanceof Tiger) //true