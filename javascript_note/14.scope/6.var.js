// var의 특징 (👎)
// 일반 코딩 방식과 어긋남
// 코드의 가독성과 유지보수에 좋지않음


// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어렵다.
something = '👨'
console.log(something)

// 2. 똑같은 이름으로 재선언이 가능하다.
// 버그를 만들 가능성이 높다.
var poo = '👩'
var poo = '👩'
console.log(poo)

// 3. 블록레벨 스코프가 적용이 되지 않는다.
// 지역변수가 전역변수와 동일시 되어버린다.
var apple = '사과';
{
    var apple = '🍎';
    {
        var apple = '🍏'
    }
}
console.log(apple) // 블럭 내부의 사과 이모지가 출력됨
// 기존에 알고있는 스코프와 전혀 다름


// 4. 함수레벨 스코프는 지원이 된다.
function example () {
    var dog = '🐶'
}
console.log(dog) // 이것은 에러가 발생한다.