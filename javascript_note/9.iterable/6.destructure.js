// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['apple', 'kiwi', 'berry', 'banana']
const [first, second, ...others] = fruits;
console.log(first)
console.log(second)
console.log(others)

const point = [1,2, 8];
const [x,y, z=0] = point; // z의 기본값을 정할 수 있다.
console.log(x)
console.log(y)
console.log(z)

function createEmoji () {
    return ['apple', 'appleemoji']
}
// 구조분해로 받아온다.
const [title, emoji] = createEmoji()
console.log(title)
console.log(emoji)


const dongju = {name: 'dongju', age:20, job:'s/w'}
// 객체를 구조분해 할당하는 방법
// 키 이름과 동일한 이름으로 받아야한다.
function display ({name, age, job}) {
    console.log(name)
    console.log(age)
    console.log(job)
}
display(dongju)
// job이란 키를 occupation으로 바꾸고 싶으면 아래와 같이
const {name, age, job: occupation , pet='강아지'} = dongju;
console.log(name)
console.log(age)
console.log(occupation)
console.log(pet)


// Quiz
// 다음과 같이 있을 때
const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black'
    }
}
// 바로 color에 접근할 수 있도록 구조 분해 할당 해보자
// 중첩된 구조분해 할당
function changeColor({name:name, styles: {color:color}}) {
    console.log(color);
}
changeColor(prop)