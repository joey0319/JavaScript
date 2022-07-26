// UTC 기준 (협정 세계시, 1970년 1월1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 아무것도 안주면 현재시간이 설정된다.
console.log(new Date('Jun 5, 2022'))

console.log(Date.now())

const now = new Date()
now.setFullYear(2023)
console.log(now)
now.setMonth(10) // 0이 1월이다.
console.log(now)
console.log(now.getFullYear())
console.log(now.getDate()) // 0이 1일이다.
console.log(now.getDay()) // 0이 일요일부터 6이 토요일까지
console.log(now.getMinutes())

console.log(now.toString())
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString())
console.log(now.toLocaleString('ko-KR'))