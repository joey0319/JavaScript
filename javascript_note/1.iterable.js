// 이터레이션 프로토콜(규격)을 따르면 이터러블하다!
// Iterable 하다는것 = 순회가 가능하다는 것!
// iterable 하려면 [Symbol.iterator]() 함수를 호출했을 때 Iterator 프로토콜을 따르는 객체를 반환하면 된다.
// iterator 프로토콜을 따른다는것은 next()라는 함수를 정의해서
// next() 함수를 호출하면 바로 다음값을 리턴하면된다.
// 이렇게 심볼정의를 가진 객체나, 특정 함수가 Iterator가 리턴한다는것은
// 순회가능한 객체이다.
// 순회가 가능하면 for or 나 spread 연산자를 사용할 수 있다!

const array = [1,2,3];
for (const item of array) {
    console.log(item)
}

// const obj = {
//     0:1,
//     1:2
// }
// for (const item of obj) {
//     console.log(item)
// } // obj는 iterable이 아니라고 뜬다.


// iterable 하지 않는 것도 for in 은 사용가능하다!!!


const iterator = array.values();
while (true) {
    const item = iterator.next();
    if (item.done) break
    console.log(item.value)
}
// done이 true이면 반복이 끝난다는 의미