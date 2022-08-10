// Spread 연산자, 전개 구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// ES 2018에 도입되었다.

function add(a,b,c) {
    return a+b+c;
}

const nums = [1,2,3]
// 이러한 변수를 전달하기 위해 펼쳐서 전달한다!
console.log(add(...nums))

// Rest Parameters
// 두개 이상의 인자들은 nums라는 배열에 담겨 전달된다.
function sum(first, second, ...nums) {
    console.log(nums)
}
sum(0,1,4,44,3)

// Array Concat
const fruits1 = ['apple', 'kiwi']
const fruits2 = ['berry', 'banana']
let arr = fruits1.concat(fruits2)
console.log(arr)
// concat과 동일한 효과를 내는 spread 연산!
arr = [...fruits1, ...fruits2]
console.log(arr)

// Object
const Dj = {name: 'dj', age:20}
// 기존의 객체를 복사해 온 후 추가하고 싶을때 spread!
const updated = {
    ...Dj,
    job: 's/w engineer'
}
console.log(updated)
// Dj는 그대로 유지된다.
console.log(Dj)

const jw = {name: 'JW', age:20, home:{address:'home'}}
const update = {
    ...jw
}
update.home.address = 'yourhome'
// update만 바꿨는데 둘다 바뀐다!
// shallow copy가 되었기 때문
console.log(update)

console.log(jw)