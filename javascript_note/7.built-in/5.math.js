// static properties, method

console.log(Math.E) // 오일러의 상수
console.log(Math.PI) // 원주율

// static method
// 절대값
console.log(Math.abs(-10))
// 소수점 이하를 올림
console.log(Math.ceil(1.3))
// 소수점 이하 내림
console.log(Math.floor(1.6))
// 반올림
console.log(Math.round(1.3))
console.log(Math.round(1.7))
// 정수만 반환
console.log(Math.trunc(1.43549))

// 최대 최소값 찾기
console.log(Math.max(1,2,45,4))
console.log(Math.min(1,4,5,4))

// 거듭제곱
console.log(3**2)
console.log(Math.pow(3,2))

// 제곱근
console.log(Math.sqrt(9))

// 랜덤한 값을 반환하는 함수
console.log(Math.random()) // 0부터 1사이의 랜덤숫자를 반환

// 1부터 10중에 랜덤한 정수를 반환받고 싶으면
console.log(Math.floor(Math.random()*10 + 1))