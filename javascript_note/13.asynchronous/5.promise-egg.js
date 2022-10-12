// static함수를 이용해서 간단하게 Promise 만드는 방법
// Promise.reslove
// Promise.reject도 가능하다
function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`)
}

function getChicken() {
    return Promise.resolve('🥙 => 🐔')
}

// chaining에 대해 배워보자

// getchicken을 해서
getChicken()
// 성공하면 chicken에는 화분 => 닭 문자열이 들어있다.
// 그 문자열을 fetchEgg에 전달하여 함수 호출
.then(chicken => {return fetchEgg(chicken)})
// fetchEgg 성공하면 egg(화분=>닭=>달걀 문자열)를 전달하여 fryegg호출
.then(egg => fryEgg(egg))
.then(friedEgg => console.log(friedEgg))




function fetchEgg1(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg1(egg) {
    return Promise.resolve(`${egg} => 🍳`)
}

function getChicken1() {
    return Promise.reject(new Error('치킨 가져올 수 없음!'))
    // return Promise.resolve('🥙 => 🐔')
}


getChicken1()
.catch((err)=>{
    console.log(err.name);
    return '🐓';
    // 이렇게 처리하면 닭머리 이모지 대신 닭 전체 이모지가 전달된다.
})
.then(chicken => {return fetchEgg1(chicken)})
.then(egg => fryEgg1(egg))
.then(friedEgg => console.log(friedEgg))