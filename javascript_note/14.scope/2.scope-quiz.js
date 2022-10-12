{
    const x = 1;
    {
        const y = 2;
        console.log(x) // 코드 블럭 안의 안이므로 접근 가능 1출력
    }
    console.log(x) // 같은 블럭안이므로 1 출력
    // console.log(y) // 여기서 에러가 난다. y가 정의된 블록 외부이므로 참조 불가
}


const text = 'global' // 전역변수, 전역 스코프, 글로벌 스코프
{
    const text = 'inside block1'; // 지역변수, 로컬변수, 지역스코프, 로컬스코프
    {
        console.log(text) // inside block1이 출력된다.
    }
}