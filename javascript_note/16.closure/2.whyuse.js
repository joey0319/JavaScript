// 내부 정보를 은닉하고 공개 함수를 통한 데이터 조작을 위해 쓰인다.
// 캡슐화와 정보은닉을 위해 쓰인다!!
// 클래스의 private과 똑같은 효과를 누린다.
// 클래스가 없을 때 클로져를 사용하여 정보를 은닉하고 캡슐화를 구현했다.

function makeCounter() {
    let count = 0;
    // 아래와 같이 함수안에 함수를 쓰면
    // 클로져에 의해서 count에는 접근이 안되고
    // increase 함수를 통해 증가만 시킬수 있게 할 수 있다.
    function increase () {
        count++;
        console.log(count)
    }
    return increase;
}

const increase = makeCounter();
// 증가는 되지만 count(초기값)을 만지거나 할 수는 없다.
increase()
increase()

// 하지만 이제는 이렇게 작성하지 않는다. 클래스를 사용한다!!
// 똑같이 적용하면 아래와 같이 코드가 된다.
class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count)
    }
}

const counter = new Counter()
counter.increase()
counter.increase()
counter.increase()