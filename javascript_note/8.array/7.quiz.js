// 1. 주어진 배열안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단 주어진 배열 수정하지 않도록!
// input : [바나나, 딸기, 포도, 딸기]
// output : [바나나, 키위, 포도, 키위]
const array = ['바나나', '딸기', '포도', '딸기']
function replace(array, from, to) {
    return array.map((item)=>{
        return item === from ? to : item
    })
}
console.log(replace(array, '딸기', '키위'))

// 2. 배열과 특정 요소를 전달받아 배열안에 그 요소가 몇개나 있는지
// 카운트 하는 함수 만들기
// input: [바나나, 키위, 딸기, 키위], 키위
// output : 2
const arr = ['바나나', '키위', '딸기', '키위']
function counter(arr, item) {
    return arr.filter(value=>value === item).length
}
console.log(counter(arr,'키위'))


//3. 배열1, 배열2 두개의 배열을 전달받아
// 배열1 아이템 중 배열 2에 존재하는 아이템만 담고 있는 배열 반환
// input: [바나나, 키위, 포도] , [바나나, 딸기 , 포도, 딸기]
// output: [바나나, 포도]
const arr1 = ['바나나', '키위', '포도']
const arr2 = ['바나나', '딸기' , '포도', '딸기']
const arr3 = arr1.filter((item)=>{
    return arr2.includes(item)
})
console.log(arr3)




// 퀴즈 4
// 5보다 큰 숫자들의 평균을 출력
const nums = [3,16,5,25,4,34,21]
const newNums = nums.filter((item)=>{
    return item > 5;
})
console.log(newNums.length)
const result = newNums.reduce((sum, value)=>{
    sum += value
    return sum
})
console.log(result/newNums.length)