// 1. 주어진 배열안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단 주어진 배열 수정하지 않도록!
// input : [바나나, 딸기, 포도, 딸기]
// output : [바나나, 키위, 포도, 키위]
const array = ['바나나', '딸기', '포도', '딸기']
function change (array, from, to) {
    let newArray = []
    for (let i=0;i<array.length;i++) {
        if (array[i] === from) {
            newArray.push(to)
        } else {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(change(array, '딸기', '키위'))

// 2. 배열과 특정 요소를 전달받아 배열안에 그 요소가 몇개나 있는지
// 카운트 하는 함수 만들기
// input: [바나나, 키위, 딸기, 키위], 키위
// output : 2
const arr = ['바나나', '키위', '딸기', '키위']
function count(arr, element) {
    let counter = 0;
    for (let  i=0; i < arr.length; i++) {
        if (arr[i]===element) {
            counter += 1
        }
    }
    return counter
}
const result = count(arr, '키위')
console.log(result)

//3. 배열1, 배열2 두개의 배열을 전달받아
// 배열1 아이템 중 배열 2에 존재하는 아이템만 담고 있는 배열 반환
// input: [바나나, 키위, 포도] , [바나나, 딸기 , 포도, 딸기]
// output: [바나나, 포도]
const arr1 = ['바나나', '키위', '포도']
const arr2 = ['바나나', '딸기' , '포도', '딸기']

function isInclude(arr1, arr2) {
    let included = []
    for (let i=0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            included.push(arr1[i])
        }
    }
    return included
}
const results = isInclude(arr1, arr2)
console.log(results)