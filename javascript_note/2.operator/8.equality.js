// 동등 비교 관계 연산자 (Equality operators)

// == 값이 같음
console.log(2 ==2); // true
console.log(2 == '2') // true
console.log(true == 1); //true
// != 값이 다름
console.log(2 != 2); // false

// === 값과 타입이 같음
console.log(2 === '2') // false
console.log(true === 1); // false
// !== 값과 타입이 다름

const obj1 = {
    name: 'js'
}

const obj2 = {
    name: 'js'
}

console.log(obj1 == obj2); // false
// obj1과 obj2는 메모리 주소를 저장하고 있고 그 메모리주소는
// 서로 다르므로 false가 출력된다.
console.log(obj1 === obj2); // false

console.log(obj1.name == obj2.name); // true

let obj3 = obj2;
console.log(obj3 === obj2); //true
console.log(obj3 == obj2); //true
// 메모리 주소도 같고 타입도 같기 때문에 true가 출력된다.