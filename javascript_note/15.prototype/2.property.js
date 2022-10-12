const dog = {name: '와우', emoji: '🐶'}

console.log(Object.keys(dog)) // 객체안의 키를 출력
console.log(Object.values(dog)) // 객체안의 값을 출력
console.log(Object.entries(dog)) // 객체안의 키 값 쌍을 배열로 출력

console.log('name' in dog) // dog라는 객체안에 name이라는 키가 있는지 확인
console.log(dog.hasOwnProperty('name')) // 이것도 마찬가지로 key가 있는지 확인

// 오브젝트 안의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
// 디스크립터 전부를 가져오고 싶으면
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors)

// 디스크립터 하나만 받아오고싶으면
const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc)

// 프로퍼티를 바꿀 수 있다.
Object.defineProperty(dog, 'name', {
    value : '멍멍',
    writable: false, // 값을 업데이트 할 수 있는지
    enumerable: false, // 순회할 수 있는지
    configurable: false // 키 자체를 삭제하는 등의 키를 수정할 수 있는지
})

console.log(dog.name) // 멍멍이 출력된다.
console.log(Object.keys(dog)) // name, emoji 두 키중 emoji만 출력된다.
// 왜냐하면 위에서 우리가 name의 enumerable 속성을 false로 바꿔줬기 때문


// 아래와 같이 속성들을 지정할 수 있다.
const student = {};
Object.defineProperties(student, {
    firstName: {
        value: '영희',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: '김',
        writable:true,
        enumerable: true,
        configurable: true
    },
    fullName: {
        get () {
            return `${lastName} ${firstName}`
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable:true
    }
})
console.log(student)