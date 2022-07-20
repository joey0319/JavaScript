// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 (최신 버전 ES6부터 지원)

// 1. 생성자 함수
function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = ()=>{
        console.log(`${this.name}: ${this.emoji}`);
    };
    return this; // 생략가능
}

const apple = new Fruit('apple', '사과') // 사용법은 new
const orange = new Fruit('orange', '오렌지')
console.log(apple)
console.log(orange)
console.log(apple.name)
console.log(apple.emoji)
apple.display()

// 2. 클래스로 바꿔 보자
class Fruit {
    // 생성자 : new  키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // 객체안에서 사용할 함수는 보통 밖에 저장해 준다.
    display = ()=>{
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// 사용법은 동일함 new 키워드로 사용
// 용어 정리
// fineapple은 Fruit 클래스의 '인스턴스'이다.
const fineapple = new Fruit('findapple', '파인애플')
console.log(fineapple)
fineapple.display()

// obj는 그냥 객체이고 그 어떤 클래스의 인스턴스도 아니다.
// 클래스를 통해 만들어진 객체만이 인스턴스라고 불린다.
const obj = {name: 'joey'}
