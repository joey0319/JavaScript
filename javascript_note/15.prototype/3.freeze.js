// 동결! Object.freeze
const dongju = {name:'동주'}
const dog = {name: '와우', emoji: '🐶', owner:dongju}

// 강아지를 동결해보자
// 동결하면 추가, 삭제, 쓰기, 속성 재정의가 안된다.
// 단, 얕은 꽁꽁 얼림이 된다. -> 여기서 dog에 중첩된 dongju object는 freeze가 안된다.
Object.freeze(dog)
dog.name = '멍멍'
console.log(dog) // 여전히 와우이다. freeze로 동결되었기 때문
dog.age = 4;
console.log(dog) // age 속성이 추가가 안된다.
delete dog.name;
console.log(dog) // 여전히 삭제가 안된다.

dongju.name = '동동주'
console.log(dog) // 주인의 이름이 동동주로 바뀌어 있다. 즉 중첩된 dongju 객체는 freeze안된다.

// 밀봉! Object.seal
// 값의 수정만 가능!! / 추가, 삭제, 속성 재정의는 불가능!!!
const cat = {};
// cat에 dog의 프로퍼티를 복사해오는 문법
Object.assign(cat, dog) 
// spread 연산자와 동일
const cat1 = { ...dog }
console.log('cat', cat)
console.log('cat1', cat1)

Object.seal(cat);
cat.name = '냐옹';
console.log(cat) // 이름이 냐옹으로 바뀌어 있다.
delete cat.emoji
console.log(cat) // 삭제는 안된다.

// 동결되었는지 밀봉되었는지 확인하는 함수
console.log(Object.isFrozen(dog))
console.log(Object.isSealed(dog))

// 확장을 금지하는 preventExtensions
// 추가만 안된다.
const tiger = { name : '어흥'}
Object.preventExtensions(tiger)
console.log(Object.isExtensible(tiger)) // 확장이 안된다고 false가 출력됨
tiger.name = '어흥어흥'
console.log(tiger) // 이름이 바뀌어서 어흥어흥 출력됨
delete tiger.name;
console.log(tiger) //  삭제되어서 빈 {}이 출력됨 즉, 값 수정, 삭제는 가능
tiger.age = 20
console.log(tiger) // 추가는 안된다