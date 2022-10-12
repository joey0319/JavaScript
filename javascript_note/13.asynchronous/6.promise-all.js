function getBanana() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('🍌');
        }, 1000)
    })
}

function getApple() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('🍎');
        }, 3000)
    })
}

function getOrange() {
    return Promise.reject(new Error('no orange'))
}

// 바나나와 사과를 함께 가지고 오기
// 순차적으로 Promise를 진행하니 바나나 가지고 오는 1초동안
// 사과를 가져오지 못함 그래서 총 4초가 걸림
// 이것을 병렬적으로 한번에 하고 싶을 때
getBanana()
.then((banana) => 
getApple()
.then(apple => {
    return [banana, apple]
}))
.then(console.log)

// Promise.all 병렬적으로 한번에 모든 Promise 실행
Promise.all([getBanana(), getApple()])
.then(fruits => console.log('all',fruits))
// 이렇게 실행해보면 all [🍌, 🍎] 이게 먼저 나온다
// 바나나 가져오는동안 사과도 가져오기 때문에

// Promise.race : 주어진 Promise 중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()])
.then(fruit => console.log('race', fruit))
// 이렇게 하면 1초뒤에 바나나가 먼저 출력됨 바나나가 제일 빨리 받아졌기 때문


// 만약 에러가 발생하는 getOrange와 Promise.all을 하면 어떻게 될까?
Promise.allSettled([getBanana(), getApple(), getOrange()])
.then(fruits => console.log('all-settle',fruits))
.catch((err)=>{console.log(err)})
// all settle을 쓰면 성공하든 실패하든 모든 결과를 받아 볼 수 있다.