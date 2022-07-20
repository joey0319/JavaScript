// static 정적 프로퍼티, 메서드

class Fruit {
    static MAX_V = 10;
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수 없다.
        return new Fruit('banana', '바나나')
    }

    // 인스턴스 레벨의 메서드
    display = ()=>{
        console.log(`${this.name}: ${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana)
console.log(Fruit.MAX_V) // 클래스 레벨의 값은 클래스를 통해서만 접근이 가능하다.

// static의 사용예제
Math.pow();
Number.isFinite(1);