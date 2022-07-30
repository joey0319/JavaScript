function makeIterable (initialValue, maxValue, callback) {
    return {
        [Symbol.iterator] () {
            let num = initialValue;
            return { 
                next () {
                    return {value:callback(num++) , done: num > maxValue} // num*2한뒤 ++하라는 의미
                }
            }
        }
    }
}

// 다음과 같이 for of 순회가 가능하려면 이터러블 프로토콜을 따라야함
const multiple = makeIterable(0, 10, (num)=>num*2)
for (const num of multiple) {
    console.log(num);
}