// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터
// 나의 답
class Counter {
    constructor (number) {
        this.number = number
    }
    plus () {
        this.number += 1
    }
}

const counter = new Counter(2);
for (let i=0;i<10;i++) {
    counter.plus();
    console.log(counter.number)
}


// 정답
// 사용자의 입장에서 어떻게 사용할것인지 먼저 시뮬레이션 해본다.
const couter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);

// startValue를 받아서 숫자가 아니거나 0보다 작으면
// 결과값 value를 0으로 초기화 해주고 이 value는 바깥에서 접근 못하도록
// private 설정을 해준다.
class Counter {
    #value;
    constructor (startValue) {
        if (isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        }
        else {
            this.#value = startValue;
        }
    }
    // 현재 value는 외부에서 접근 불가하므로
    // getter를 활용해서 value를 조회만 할 수 있도록 해준다.
    get value() {
        return this.#value;
    }
    increment () {
        this.#value++;
    }
}