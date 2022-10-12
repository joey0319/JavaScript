function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`)
}

function getChicken() {
    return Promise.resolve('🥙 => 🐔')
}

// 아래의 then chaining 구문을 async로 변환해보자
// getChicken1()
// .catch((err)=>{
//     console.log(err.name);
//     return '🐓';
// })
// .then(chicken => {return fetchEgg1(chicken)})
// .then(egg => fryEgg1(egg))
// .then(friedEgg => console.log(friedEgg))


async function getFry() {
    let chicken;
    // try catch 구문으로 에러를 핸들링한다
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐓'
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg)
}

getFry().then(console.log)