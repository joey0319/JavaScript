// 주어진 배열에서 중복 제거
const fruits = ['바나나', '사과', '포도', '바나나', '사과', '복숭아']
function removeDuplication(array) {
    return [... new Set(array)]
}
const answer = removeDuplication(fruits)
console.log(answer)


// 주어진 두 세트에서 공통된 아이템만 담고 있는 세트 만들기
const set1 = new Set([1,2,3,4,5])
const set2 = new Set([1,2,3])

function findIntersection(set1, set2) {
    const array = [...set1].filter(item => set2.has(item))
    return new Set(array)
}
const ans = findIntersection(set1, set2)

console.log(ans)