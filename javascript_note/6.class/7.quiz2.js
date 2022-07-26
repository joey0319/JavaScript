// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원 : 시간당 10000원,  파트타임 직원 시간당 : 8000원


// 사용자가 어떻게 사용할까?
// const ellie = new FullTimeEmployee('엘리', 's/w', 30);
// const bob = new PartTimeEmployee('밥', 's/w', 20);
// console.log(ellie.caculatePay());
// console.log(bob.caculatePay());

// 사용자가 위와 같이 사용한다고 시뮬레이션 하고
// 코드를 작성한다.
class Employee {
    constructor (name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate  = payRate;
    }
    caculatePay () {
        return this.payRate * this.hoursPerMonth
    }
}

class FullTimeEmployee extends Employee {
    // payrate는 외부에서 값을 보지도 수정하지도 못하게
    // 캡슐화 해주는 것이 좋다.
    static #PAY_RATE = 10000;
    constructor (name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE)
    }
}

class PartTimeEmployee extends Employee {
    static #PAY_RATE = 8000;
    constructor (name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE)
    }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
// 부모 클래스의 매서드는 바로 접근이 가능하다.
console.log(ellie.caculatePay());
console.log(bob.caculatePay());