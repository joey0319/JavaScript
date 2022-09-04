// Symbol은 유일한 값을 나타낼 때 유용하다
// 유일한 키를 생성할 때 사용한다.

const map = new Map()
const key1 = 'key'
const key2 = 'key'

map.set(key1, 'hello')
console.log(map.get(key2)) // key1과 key2의 값이 같으므로 key2로도 접근 가능하다.

console.log(key1 === key2) // 값과 타입이 같기 때문에 true가 나온다.

const key3 = Symbol('key') // Symbol은 new키워드 필요없다.
const key4 = Symbol('key')
map.set(key3, 'hello')
console.log(map.get(key4)) // 접근불가하다 symbol이기 때문
console.log(key3 === key4) // key3와 key4가 값은 같지만 서로 다른것으로 인식된다.

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
// symbol.for을 이용해 전역 심벌에 등록해야만
// symbol.keyfor로 조회할 수 있다.
const k1 = Symbol.for('key')
const k2 = Symbol.for('key')

console.log(k1 === k2)
// 값을 조회하고 싶을 때 keyfor
console.log(Symbol.keyFor(k2))

const obj = {[k1]: 'hello', [Symbol('key')]: 1}
console.log(obj)
console.log(obj[k1])
console.log(obj[Symbol('key')]) // 접근 불가
// 접근 불가능한 이유는 obj의 Symbol('key')와 console의 Symbol('key')는 다른것이기 때문에
// 접근 불가능하게 만들고 싶을 때 심볼을 사용한다.