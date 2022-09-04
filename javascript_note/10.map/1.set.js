// Set
const set = new Set([1,2,3]);
console.log(set)

console.log(set.size);

// set안에 아이템이 존재하는지 확인
console.log(set.has(2))
console.log(set.has(6))

// set은 iterable하기 때문에 순회 가능
set.forEach(item => console.log(item));

for (const value of set.values()) {
    console.log(value);
}

// 추가
set.add(4)
console.log(set)

// 삭제
set.delete(4)
console.log(set)

set.clear()
console.log(set)

// 오브젝트 세트
const obj1 = {name: '사과', price: 8};
const obj2 = {name: '바나나', price: 5};
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs)
// set의 크기가 3이 되지않고 2 그대로다
// 그 이유는 참조타입 obj1의 주소값을 저장하고 있는데
// 그 주소값이 같아 같은 값으로 인식되어 중복이 불가능하다는 set의 성질에 의해

// 퀴즈
const obj3 = {name: '바나나', price: 5};
objs.add(obj3)
console.log(objs)
// obj2와 obj3은 똑같지만 주소값이 다르므로 다르게 인식되어
// set에서 중복된 것으로 인식되지 않는다.