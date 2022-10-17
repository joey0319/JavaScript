// 클래스와 콜백함수의 사용법

class Counter {
    // 생성자 함수에서 callbac함수를 인자로 받고
    // callback이라는 변수명으로 저장을 해둔다.
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase () {
        this.counter++;
        console.log(this.counter)
        if (this.counter % 5 === 0) {
            // callback함수가 전달 되었을 때만 콜백함수를 실행한다.(콜백함수에서는 this.counter를 받는다.)
            this.callback && this.callback(this.counter)
        }
    }
}

function printSomething(num) {
    console.log(`Wow ${num}!`)
}

function alertSomething(num) {
    alert(`alert ${num}`)
}

// 여기서 coolCounter 객체를 만들 때 쓰고 싶은 함수를 전달해준다.
// 그러면 전달 된 함수 printSomething이 callback에 등록되고
// increase 함수 내부에서 실행된다.

// 이게 좋은 이유는 아래와 같이 하나의 클래스에서 두가지 종류의
// 객체를 만들 수 있기 때문 확장성에 좋다
const coolCounter = new Counter(printSomething);
const alertCounter = new Counter(alertSomething)

coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()