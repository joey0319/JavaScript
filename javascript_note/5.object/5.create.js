// 생성자 함수

// const apple = {
//     name: 'apple',
//     display: function () {
//         console.log(`${this.name}: 사과`) // 객체 안에서 객체의 속성에 접근하고 싶으면 this 키워드를 써줘야 한다.
//     }
// }

// const orange = {
//     name: 'orange',
//     display: function () {
//         console.log(`${this.name}: 오렌지`) // 객체 안에서 객체의 속성에 접근하고 싶으면 this 키워드를 써줘야 한다.
//     }
// }

// console.log(apple)
// console.log(orange)

// 이렇게 비슷하게 반복되는 함수를 간단하게 만들려면
// 생성자 함수 사용 함수 이름 대문자로 시작하면 생성자 함수
// 요즘은 class를 많이 사용하고 생성자 함수는 잘 사용하지 않는다.
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
