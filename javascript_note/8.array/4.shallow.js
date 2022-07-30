// 얕은복사 - 객체는 메모리 주소를 전달한다.
// 자바스크립트에서 복사할때는 항상 얕은복사가 이루어진다.
// Array.from, concat, slice, spread(...), Object.assign 등
// 모든것들도 다 얕은복사로 복사가 된다.

const pizza = {name:'pizza', price:2}
const ramen = {name:'ramen', price:3}
const sushi = {name:'sushi', price:1}

const store1 = [pizza, ramen]
const store2 = Array.from(store1)

console.log('store1:', store1)
console.log('store2:', store2)

store2.push(sushi);
console.log('store1:', store1)
console.log('store2:', store2)

pizza.price = 4;
console.log('store1:', store1)
console.log('store2:', store2)