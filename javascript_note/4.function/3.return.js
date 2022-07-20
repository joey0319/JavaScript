// return을 명시적으로 하지 않으면 undefined가 반환됨
function add (a,b) {
};

const result = add(1,2);
console.log(result) // undefined

// 예를 들어 아래와 같은 함수는 return이 필요없다.
function print(text) {
    console.log(text);
}
const outcome = print('text');

// return을 함수 중간에 사용하면 즉시 함수가 종료됨
function pprint(num) {
    if (num < 0) {
        return;
    }
    console.log(num)
}