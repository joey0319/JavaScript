// 3번의 퀴즈와 똑같은것을 promise를 활용해 만들어본다.
// callback 함수 직접 전달할 필요 X => promise 객체에 적어주면 된다.
function runInDelay(seconds) {
    return new Promise((resolve, reject)=>{
        if (!seconds || seconds < 0) {
            // 에러가 나면 reject를 호출한다.
            // reject는 error 객체를 만들어 줘야한다.
            reject(new Error('seconds가 0보다 작습니다.'))
        }
        // 여기에 콜백함수를 적어주면 된다.
        setTimeout(()=>{
            // 성공했을 때 resolve를 호출한다.
            resolve();
        }, seconds*1000)
    });
}

// 일단 함수를 실행해보고
runInDelay(3)
//성공한다면
.then(()=>{
    console.log('타이머 완료')
})
// 실패한다면
.catch(error=>console.log(error))
// 성공하든 실패하든 최종적으로
.finally(()=>{console.log('종료')})


