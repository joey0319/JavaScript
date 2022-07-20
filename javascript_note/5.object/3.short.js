const x = 0;
const y = 0;
// 키 이름과 참조하는 변수의 이름이 동일한 아래와 같은 경우
const cordinate = {x: x, y: y};
console.log(cordinate)
// 아래와 같이 축약할 수 있다.
const coordinate = {x,y};
console.log(coordinate)

// 아래와 같은 함수를 보면 키 이름과 참조하는 변수 이름이 같다.
function makeObj(name, age) {
    return {
        name : name,
        age : age,
    }
}

// 이렇게 줄여 쓸 수 있다.
function makeObj1(name, age) {
    return {
        name,
        age
    }
}

console.log(makeObj('동주', 30))
console.log(makeObj1('동주', 30))