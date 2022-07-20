// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
// 상태 변경이 필요한 경우는 새로운 상태(object, 값)을 만들어서 반환한다.
// 원시값은 값에 의한 복사이지만
// 객체값은 참조에 의한 복사이므로 원본을 변경한다.
function display(num) {
    num = 5; // num은 함수 지역변수이다.
    console.log(num);
}
const value = 4;
display(value); // 5가 출력된다.
console.log(value) // 4가 출력된다.

// 문제가 되는 경우 (참조에 의한 복사)
function displayObj(obj) {
    obj.name = 'change!!'
    console.log(obj);
}
const joey = {name: 'joey'};
displayObj(joey)

console.log(joey)

// 꼭 변경이 필요한다면
// 함수 이름부터 바꾼다는 것을 명시하고
// obj는 그대로 두고 새로운 객체를 만들어 반환한다.
function changeName(obj) {
    return {...obj, name:'change!!!'}
}
