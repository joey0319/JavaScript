// 5번의 프로토타입 기반 객체지향 프로그래밍을
// 클래스 기반 객체지향 프로그래밍으로 바꿔보자


class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    printName() {
        console.log(`${this.name} ${this.emoji}`)
    }
}


class Dog extends Animal {
    play () {
        console.log('같이 놀자!')
    }
}

class Tiger extends Animal {
    hunt() {
        console.log("사냥하자!")
    }
}

const dog1 = new Dog('멍멍', '🐶', '동주');
const tiger1 = new Tiger('어흥', '😺');
dog1.printName()
tiger1.printName()
dog1.play()
tiger1.hunt()

console.log(dog1 instanceof Dog) // true
console.log(dog1 instanceof Animal) //true
console.log(dog1 instanceof Tiger) //false

console.log(tiger1 instanceof Dog) // false
console.log(tiger1 instanceof Animal) //true
console.log(tiger1 instanceof Tiger) //true