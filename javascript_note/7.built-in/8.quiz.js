// 1. 문자열의 모든 캐릭터를 하나씩 출력
// H
// e
// l
// l
// ...
// !
const text = 'Hello World!'
for (let i=0;i<text.length;i++) {
    console.log(text.charAt(i))
}


// 2. 사용자들의 id를 잘라내 각각의 id를 배열로 보관
// 출력 : ['user1', 'user2', 'user3', 'user4']
const ids = 'user1, user2, user3, user4'
const result = ids.split(', ')
console.log(result)

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
// function print () {
//     console.log(Date.now())
// }
// setInterval(print, 1000)

setInterval(()=>{
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'))
}, 1000)