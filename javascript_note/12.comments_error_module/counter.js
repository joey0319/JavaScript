// 변수는 다른곳에서 못쓰게 하고 싶을 때는 export 안해주면 된다.
// 보통 변수는 export안하고 getCount 함수를 통해 접근하게 해준다
let count = 0;

export function increase() {
    count++;
    console.log(count)
}

export function getCount() {
    return count;
}