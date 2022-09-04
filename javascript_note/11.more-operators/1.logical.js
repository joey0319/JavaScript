// 논리연산자 Logical Operator
// && and연산자
// || or 연산자

// 단축평가: short-circuit evaluation
// 조건문 밖에서는 단축평가 된다.
const obj1 = {name:'개'}
const obj2 = {name: '고양이', owner: '나'}

if (obj1 && obj2) {
    console.log('둘다 true입니다.')
}

if (obj1 || obj2) {
    console.log('둘중 하나는 true입니다.')
}

let result = obj1 && obj2;
console.log(result) // obj2가 출력된다. and는 끝까지 봐야하기 때문에
result = obj1 || obj2
console.log(result) // obj1이 출력된다.

// 단축평가 활용법
// if 문을 안쓰고 코드를 짧게쓸 수 있다!!!
function changeOwner(aniaml) {
    if (!aniaml.owner) {
        throw new Error('앱이 crash 되었습니다.')
    }
    aniaml.owner = '바뀐 주인'
}

function makeNewOwner(aniaml) {
    if (aniaml.owner) {
        throw new Error('주인이 이미 있습니다.')
    }
    aniaml.owner = '새로운 주인'
}


// &&는 앞의 조건이  true일때 무언가를 해야할 경우 쓴다.
obj1.owner && changeOwner(obj1) // obj1은 주인이 없고 false라서 실행이 안됨
obj2.owner && changeOwner(obj2) // obj2는 주인이 있고 true라서 뒤에 함수가 실행됨
console.log(obj1)
console.log(obj2)
// ||은 앞의 조건이 false일때 무언가를 해야할 경우 쓴다.
obj1.owner || makeNewOwner(obj1) // obj1은 주인이 없고 false이므로 뒤에 함수 실행됨
obj2.owner || makeNewOwner(obj2) // obj1은 주인이 있고 true에서 뒤에 함수 실행안됨
console.log(obj1)
console.log(obj2)

// null 또는 undefined인 경우를 확인할 때 &&을 쓴다.
let item = {price:1}
const price = item && item.price; // 이렇게 쓰면 item이 null이거나 undefined일 경우에는 뒤의 접근 자체를 안해서 오류가 안난다.
// item이 true 즉 있을 때만 뒤의 접근을 시도한다
console.log(price)

// || 활용법 : 기본값을 설정 할 때
function print(message) {
    const text = message || 'hello' // 메세지가 없다면 = false라면 뒤의 hello를 할당한다.
    console.log(text)
}

function printDefaultParameter(message='hello') {
    console.log(message)
}

print() // undefined가 출력된다 인자를 전달 안했기 때문
print(undefined)
print(null)
print(0)

printDefaultParameter()
printDefaultParameter(undefined)
printDefaultParameter(null) // null은 undefined가 아니므로 그대로 전달되어 출력되어 버린다.
printDefaultParameter(0) // 0
//default parameter와의 차이점 *****
// default parameter는 전달하지 않거나, undefined일 때 자동할당
// default parameter는 null인경우 혹은 0인경우 다 그대로 전달된다.
// ||연산자는 값이 falshy한 경우 모두 설정한다.
// || 연산자는 null, 0인경우 기본값으로 전달된다.

