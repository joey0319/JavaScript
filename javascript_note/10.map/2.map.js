// 맵은 키, 값으로 이루어져 있다. = 파이썬의 딕셔너리
// 키는 유일해야 한다, 값은 중복되어도 상관없다.
// 맵이 자바스크립트의 object와 비슷하다.

const map = new Map([
    ['key1', '사과'],
    ['key2', '바나나']
]);

console.log(map)

// 사이즈 확인
console.log(map.size)

// 존재여부 확인
console.log(map.has('key1'))
console.log(map.has('key5'))

// 순회
map.forEach((value, key)=> console.log(key, value))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())

// 찾기
console.log(map.get('key1'))
console.log(map.get('key2'))

// 추가
map.set('key3', '레몬')
console.log(map)

// 삭제
map.delete('key3')
console.log(map)

// 전부삭제
map.clear()
console.log(map)

// 오브젝트와의 차이점???
const key = {name: '우유', price: 10}
const milk = {name: '우유', price: 10, description: '맛있는 우유'}
const obj = {
    [key] : milk,
}
console.log(obj)

const map2 = new Map([[key, milk]]);
console.log(map2)
// 오브젝트는 foreach 사용불가 map은 사용가능
console.log(obj[key]) // 오브젝트는 바로 접근가능
console.log(map.get(key)) // map은 get으로 접근해야함