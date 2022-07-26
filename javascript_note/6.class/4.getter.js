// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 접근자 프로퍼티 설정 get
    get fullName () {
        return `${this.lastName} ${this.firstName}`
    }
    // set은 할당하면 실행되는 것
    set fullName(value) {
        console.log('set',value)
    }
}

const student = new Student('수지', '김')

// console.log(student.fullName())
// 이렇게 접근하는것을 student.fullName 만 써서 접근하고 싶을때
// 사용하는것이 접근자 프로퍼티
console.log(student.fullName)
// 아래와 같이 fullName에 김철수를 '할당'하면
// set 부분의 함수가 실행된다.
// 여기서 할당하고자 하는 값이 set 함수의 value 인자로 전달된다.
student.fullName = '김철수'
