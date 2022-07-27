// HOF(higher order function)
const fruits = ['바나나', '딸기', '포도', '딸기']

// 배열의 요소들을 하나하나 출력하려면?
// for문으로 인덱스 하나하나 돌면서 출력? -> 비효율적

// 배열을 순회하면서 원하는것을 할 때 forEach!!
// 콜백함수는 배열의 요소마다 한번씩 호출된다.
fruits.forEach((value, index, array)=>{
    console.log('------------')
    console.log(value)
    console.log(index)
    console.log(array)
})

// 조건에 맞는 아이템을 찾을 때
const item1 = {name:'milk', price:2}
const item2 = {name:'cookie', price:3}
const item3 = {name:'rice', price:4}
const products = [item1, item2, item3]
// return에 쓴 문장이 true이면 해당하는 value를 반환해주는 함수 find
// 제일 먼저 조건에 맞는 아이템을 반환
let found = products.find((value)=>{
    return value.name === 'cookie'
})
console.log(found)

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
const foundIndex = products.findIndex((value)=>{
    return value.name === 'cookie'
})
console.log(foundIndex)

// 배열의 아이템들이 부분적으로 조건에 맞는지 확인
// 배열의 아이템중 하나라도 이름이 cookie면 true를 반환
found = products.some((item) => item.name==='cookie')
console.log(found)

// 배열의 아이템이 전부 조건에 맞아야지 true를 반환
found = products.every((item)=>item.name==='cookie')
console.log(found)

// 조건에 맞는 모든 아이템들을 새로운 배열로 반환!!
// return뒤에 오는게 true인 것들만 모아 새로운 배열로 반환
found = products.filter((item)=>item.name==='cookie')
console.log(found)

console.clear();

// Map :배열의 아이템들을 각각 다른 아이템으로 매핑하여 새로운 배열 생성
const nums = [1,2,3,4,5]
found = nums.map(item=>item*2)
console.log(found)
// 짝수이면 두배하고 홀수이면 그대로 해서 새로운 배열 반환
found = nums.map((item)=>{
    if (item%2 ===0) {
        return item*2
    } else {
        return item;
    }
})
console.log(found)

// Flatmap : 내부의 배열을 풀어서 리턴해줌
found = nums.map(item=>[1,2])
console.log(found)
// 내부의 배열을 풀어서 리턴해준다.
found = nums.flatMap(item=>[1,2])
console.log(found)

// 유용하게 쓸수 있는 방법
found = ['nono', 'yesyes'].map((text)=>text.split(''))
console.log(found) // 이렇게 하면 2차원 배열로 리턴된다.
// 하나의 배열로 만들고 싶으면
found = ['nono', 'yesyes'].flatMap((text)=>text.split(''))
console.log(found)

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고 기존의 배열을 변경한다!
const texts = ['hi', 'abc', 'nono']
texts.sort()
console.log(texts)

const numbers = [1,594,10,56,5,3,] // 문자열 형태로 오름차순이라 10이 3보다 먼저나온다
numbers.sort()
console.log(numbers)
// 그럴때는 <0 이면 a가 작다는 말이므로 a가 앞으로 온다
numbers.sort((a,b)=>a-b) // 오름차순 정렬
console.log(numbers)
numbers.sort((a,b)=>b-a) // 내림차순 정렬
console.log(numbers)

// reduce 배열의 요소들을 접어서 접어서 값을 하나로 해준다.
let result = [1,2,3,4,5].reduce((sum, value)=>{
    sum += value
    return sum
}, 10) // 10으로 초기화 한것이다!
console.log(result)