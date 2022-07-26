// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat () {
//         console.log('먹자')
//     }
//     sleep () {
//         console.log('잔다')
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat () {
//         console.log('먹자')
//     }
//     sleep () {
//         console.log('잔다')
//     }
//     play(){
//         console.log('놀자')
//     }
// }

// 위와같은 두 클래스가 있으면 먹고, 자는것은 공통이다.
// 이와 같이 공통된것이 있으면 대분류(Animal)로 나누고 상속을 이용한다.

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat () {
        console.log('먹자')
    }
    sleep () {
        console.log('잔다')
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이')
console.log(tiger)
// sleep은 부모클래스의 매서드 이지만 바로 접근 가능하다.
// tiger에서 sleep을 먼저 찾고, 찾지 못하면 부모 animal에서 sleep을 찾는다.
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    // 자식에서 constructor를 만들고 싶으면
    // 부모 클래스에 있던 color를 가져오고 super를 통해 할당해주고
    // 나만 해당하는 ownerName은 따로 추가해준다.
    constructor (color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play () {
        console.log('놀자')
    }
    // 부모한테 있던 eat를 자식쪽에서는 바꾸고 싶다면
    // 그대로 써주면 알아서 덮어 씌워진다.
    // 이것을 overriding이라고 한다.
    eat () {
        console.log('강아지가 먹는다.')
    }
    // 아래와 같이 부모의 sleep을 그대로 이어 받으면서
    // 나한테만 해당하는 코드를 수행할 수 있다.
    sleep () {
        super.sleep();
        console.log('강아지가 잔다!!')
    }
}
const dog = new Dog('빨강이', '이동주')
console.log(dog)
dog.sleep();
dog.eat();
dog.play()
