// 접근제어자 - 캡슐화를 할 수 있다.
// private(# 키워드 사용), public(기본), protected(js에는 없는 개념)
// priviate 설정을 해주면 외부에서 접근이 불가능하다.
class Fruit {
    // 초기화 시키고 싶은것이 있다면 constructor 이전에 써준다.
    // 변수로 받아 오는 것은 써도 되고 안써도 된다.
    #name;
    #emoji;
    #type = '과일'
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
    display = ()=>{
        console.log(`${this.name}: ${this.emoji}`);
    };
}

const apple = new Fruit('apple', '사과');
console.log(apple)