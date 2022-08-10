// [Symbol.iterator]() : Iterator{ next(): {value, done} }
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터 만들기
// 0,2,4,6,8,10,12,14,16,18


// 코드 분석
const multiple = {
    [Symbol.iterator] () {
        const max = 10;
        let num = 0;
        return { // [Symbol.iterator] 이걸 호출할때 반환되는 것의 이름이 꼭 Iterator일 필요없다. 그냥 이름없이 객체만 써줘도 됨
            next () {
                return {value:num++ * 2 , done: num > max} // num*2한뒤 ++하라는 의미
            }
        }
    }
}

// 다음과 같이 for of 순회가 가능하려면 이터러블 프로토콜을 따라야함
for (const num of multiple) {
    console.log(num);
}