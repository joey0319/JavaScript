const obj = {
    name: '조이',
    age : 20,
};

// 코딩하는 시점에 정적으로 접근이 확정됨
obj.name
obj.age

// 동적으로 속성에 접근하고 싶다면? 대괄호 표기법!!
function getValue(obj, key) {
    // return obj.key; -> 이렇게 하면 동작하지 않는다.
    return obj[key];
}
// 키를 추가하는 함수 -> 동적으로 키 값을 추가해야 함
function addKey(obj, key, value) {
    obj[key] = value;
}
addKey(obj, 'job', 'engineer')

console.log(getValue(obj, 'age')) // key값은 문자열로 전달해줘야 한다.
