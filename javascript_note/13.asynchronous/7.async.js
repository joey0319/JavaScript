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

// 바나나와 사과를 async를 이용해 가져오기
async function fetchFruits() {
    const banana = await getBanana(); // 바나나를 받아올 때까지 기다려
    const apple = await getApple(); // 바나나 받아오면 또 사과 받을 때까지 기다렸다가
    return [banana, apple]
}

fetchFruits()
.then(fruits => console.log(fruits))