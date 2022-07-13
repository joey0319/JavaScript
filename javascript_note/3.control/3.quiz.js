let num = 2;

//num이 짝수이면 yes 홀수이면 no 뜨게 한다.

// 1. 삼항연산자 사용
console.log(num % 2 === 0 ? 'yes' : 'no')
let emoji = num % 2 === 0 ? 'yes' : 'no'
console.log(emoji)

// 2. if문 사용
if (num % 2 == 0) {
    console.log('yes')
} else {
    console.log('no')
}