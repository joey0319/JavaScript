function Cat(name) {
    this.name = name;
    // 2. 화살표 함수로 정의해주면 된다.(2번과 비교해볼것)
    // arrow 함수를 사용 : arrow 함수는 함수를 만드는 순간
    // 렉시컬 환경에서의 this를 기억한다.
    // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.
    this.printName = () => {
        console.log(`고양이 이름을 출력한다: ${this.name}`)
    }
    // 1. bind 함수를 이용해서 수동적으로 영구적 정적 바인딩 한다.
    // this.printName = this.printName.bind(this)
    // 이렇게 하면 객체(인스턴스)를 만드는 순간에 this와 영구적으로 바인딩된다.
    
}

const cat = new Cat('야옹')

function Dog (name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지의 이름을 출력한다: ${this.name}`)
    }
}


const dog = new Dog('멍멍');

dog.printName = cat.printName;
dog.printName()
cat.printName()


function printOnMonitor(printName) {
    console.log('모니터를 준비하고, 전달된 콜백을 실행');
    printName();
}

printOnMonitor(cat.printName); // 2번에서 undefined와 달리 야옹이 출력된다.
// 정적 바인딩 해줬기 때문


