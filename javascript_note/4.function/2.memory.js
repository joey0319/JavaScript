function add(a,b) {
    return a+b;
}

// sum 변수에는 add 함수가 있는 메모리 주소가 저장되어 있다.
// 실제 add 함수는 heap영역에 저장되어 있다.
const sum = add;

console.log(sum(1,2));
console.log(add(1,2));

// 인자 개수가 필요보다 많으면 알아서 자른다.
console.log(add(1,2,3))