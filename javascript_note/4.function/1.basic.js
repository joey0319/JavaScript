// 함수의 정의
function add (num1,num2) {
    return num1 + num2;
};

const result = add(1,2);
console.log(result);

// 사용예제
// 템플릿 리터럴을 사용해서 아래와 같이 나타낼 수 있지만
let lastName = '김';
let firstName = '지수';
let fullname = `${lastName} ${firstName}`;

// 함수로 만들면
function fullName (firstName, lastName) {
    return `${lastName} ${firstName}`;
}

console.log(fullName(lastName, firstName))
