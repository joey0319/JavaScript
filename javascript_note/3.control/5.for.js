// 반복문 Loop Statement

// for (변수 선언문; 조건식; 증감식) { }

// 실행순서:
// 1. 변수선언문
// 2. 조건식이 참이면 { } 코드블럭 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

for (let i = 0; i < 5, i=i+2) {
    console.log(i)
}

// 중첩도 가능함
for (let i = 0; i < 5, i=i+2) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

// continue, break
for (let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log(i)
        break;
    }
}