// 오브젝트는 단 하나의 prototype을 가리킬 수 있다.(부모는 단 하나)
// 만약 여러개의 함수들을 상속하고 싶다면
// Mixin을 사용한다!

const play = {
    play: function () {
        console.log(`${this.name} 놀아요!`)
    }
}

const sleep = {
    sleep: function () {
        console.log(`${this.name} 자요!`)
    }
}

function Dog(name) {
    this.name = name;
}

// Dog 프로토타입에 play와 sleep을 할당한다.
Object.assign(Dog.prototype, play, sleep)
const dog = new Dog('멍멍이')
console.log(dog)
dog.play()
dog.sleep()