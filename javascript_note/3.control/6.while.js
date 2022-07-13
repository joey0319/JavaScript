// while (조건) { }
// 조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = true;
let i =0;
while (isActive) {
    console.log('아직하는중!')
    if (i === 1000) {
        break;
    }
    i++;
}

//do while은 일단 한번은 무조건 실행하고 while 조건문 검사한다.
isActive = false;
do {
    console.log('아직 살아있다.')
} while (isActive);