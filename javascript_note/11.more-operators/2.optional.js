// 옵셔널 체이닝 연산자 Optional Chaning Operator
// ES11에 추가됨


let item = {price:1}
const price = item?.price; // item이 있으면 접근하고 없으면 접근하지 말라는 뜻
console.log(price)

let obj = {name: '🐶', owner: {name: '나'}};
const ownerName = obj && obj.owner && obj.owner.name

// 이것을 옵셔널 체이닝으로
const ownerName1 = obj?.owner?.name;
console.log(ownerName1)