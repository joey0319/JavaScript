// 배열의 함수들
// 배열자체를 변경하는지, 새로운 배열을 반환하는지 구분
const fruit = ['banana', 'apple', 'grape', 'peach']

// 특정 오브젝트가 배열인지 체크
console.log(Array.isArray(fruit))
console.log(Array.isArray({}))

// 특정 아이템의 위치를 찾는 함수
console.log(fruit.indexOf('apple'))

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruit.includes('grape')) // true
console.log(fruit.includes('gra')) // false

// 제일 뒤에 추가하는 함수
let length = fruit.push('melon') // 배열자체를 수정한다!! 그리고 길이를 return해준다.
console.log(fruit)

// 제일 앞에 추가하는 함수
fruit.unshift('berry') // 배열자체를 수정한다!! 그리고 길이를 return해준다.
console.log(fruit)

// 제일 뒤를 제거
let lastItem = fruit.pop() // 배열자체 수정하고 마지막에 있던 아이템 반환
console.log(fruit)

// 제일 앞을 제거
let firstItem = fruit.shift() // 배열자체 수정하고 앞에 있던 아이템 반환
console.log(fruit)
console.log(firstItem)

// 중간에 추가 or 삭제 가능
let deleted = fruit.splice(1, 2) // 1인덱스부터 2개를 삭제하겠다는 의미, 삭제된 아이템을 반환
console.log(fruit)
console.log(deleted)

// 1인데스부터 0개를 삭제하고 1인데스부터 water와 gogo를 추가하겠다는 의미
fruit.splice(1,0,'water', 'gogo')
console.log(fruit)

// 잘라진 새로운 배열을 만든다!!
let newArr = fruit.slice(0, 3) // 0부터 3의 전인 2까지 잘라서 새로운 배열을 반환한다.
console.log(newArr)
console.log(fruit) // fruit 기존배열은 그대로 유지한다!!

// 여러개의 배열을 붙여줌 기존 배열은 변경 안함
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)

console.log(arr1)
console.log(arr2)
console.log(arr3)

// 순서를 거꾸로 기존배열은 변경 안함
const arr4 = arr3.reverse() 
console.log(arr4)
console.clear()

// 중첩 배열을 하나의 배열로 쫙 펼치기
let arr = [
    [1,2,3],
    [4,[5,6]],
]
console.log(arr)
console.log(arr.flat(2)) // 기본적으로 1단계만 중첩된것을 풀어준다. 2를 인자로 넘겨줘 2단계를 풀어줄 수 있다.
arr = arr.flat(2)

// 특정한 값으로 배열을 채우기 ->  배열자체를 수정
arr.fill(0) // 모든 아이템을 0으로 채우겠다는 의미
console.log(arr)
arr.fill('s', 1, 3) // 1부터 3의 전인 2까지 's'로 채우겠다는 의미
console.log(arr)
arr.fill('a', 1) // 1부터 끝까지 'a'로 채우겠다는 의미
console.log(arr)

// 배열을 문자열로 합하기
let text = arr.join('|') // |를 seperator로 문자열로 합하겠다는 의미 기본값은 콤마(,)이다.
console.log(text)

