const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: 사과`) // 객체 안에서 객체의 속성에 접근하고 싶으면 this 키워드를 써줘야 한다.
    }
}

apple.display()