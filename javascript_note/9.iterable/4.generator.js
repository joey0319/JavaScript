// const multiple = {
//     [Symbol.iterator] () {
//         const max = 10;
//         let num = 0;
//         return {
//             next () {
//                 return {value:num++ * 2 , done: num > max} // num*2한뒤 ++하라는 의미
//             }
//         }
//     }
// }


// for (const num of multiple) {
//     console.log(num);
// }

// 위와 같은것을 좀더 간단히 만들 수 있는 generator

function* multipleGenerator () {
    for (let i=0; i <10; i++) {
        console.log(i)
        yield i ** 2;
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done)


next = multiple.next()
console.log(next.value, next.done)
// 이제 그만하게 하는 return
multiple.return();
// 이밑으로는 아무리 next 호출해도 안먹는다.
next = multiple.next()
console.log(next.value, next.done)