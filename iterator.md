# 1. ES6 배열순회 방법(for of)

```javascript
const arr = [1,2,3];
for (const a of arr) {
    console.log(a)
};
```

#### 위와 같은 배열 순회는 어떤식으로 작동할까?



# 2. Symbol.iterator

```javascript
const arr = [1,2,3];
arr[Symbol.iterator] = null;
for (const a of arr) {
    console.log(a)
};
// 이렇게 하면 더이상 arr가 순회되지 않는다.
// 배열의 순회와 Symbol.iterator와 관련이 있음을 알 수 있다.
```



# 3. 이터러블/ 이터레이터 프로토콜



### 1. 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator] () 를 가진 값

```javascript
const arr = [1,2,3];
let iterator = arr[Symbol.iterator]();
// 이렇게 하면 arr에는 iterator가 리턴되어 있다.
```



### 2. 이터레이터 : { value, done } 객체를 리턴하는 next () 메서드를 가진 값

```javascript
const arr = [1,2,3];
let iterator = arr[Symbol.iterator]();
iterator.next()
// 위의 코드를 계속 실행하면 {value:1, done:false}, {value:2, done:false}, {value:3, done:false}, {value:4, done:true} 이런식의 리턴을 하게된다.

const arr = [1,2,3];
let iterator = arr[Symbol.iterator]();
iterator.next()
for (const a of arr) {
    console.log(a)
};
/*
위의 코드를 실행하면 2,3만 출력된다. 그 이유는 iterator.next()를 한번 실행시켜
value 1은 이미 리턴됐으므로 value가 2부터 리턴된다.
*/
```



### 3. 이터러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

```javascript
const arr = [1,2,3];
arr[Symbol.iterator] = null;
for (const a of arr) {
    console.log(a)
};
/* 여기서 배열의 순회는 iterator.next()가 반환하는 value를 a라는 변수에 담고 출력하고 그 다음 value를 a에 담아 출력하고 done이 true가 되면 중지한다.
*/
```



# 4. 사용자 정의 이터러블

```javascript
const iterable = {
    [Symbol.iterator] () {
        let i =3;
        return {
            next() {
                return i == 0 ? { done: true } : { value: i--, done: false }
            }
        }
    }
};
let iterator = iterable[Symbol.iterator]();
```



# 5. 전개연산자의 이터러블/이터레이터 프로토콜

```javascript
const a = [1,2];
a[Symbol.iterator] = null;
console.log([...a, ...[3,4]]);
/* 위 코드를 실행하면 에러가 뜬다. 그 이유는 전개연산자도 이터러블 프로토콜을 통해 실행되는데
iterator를 null로 설정해주었기 때문
원래 [1,2,3,4]가 출력되어야 한다.
*/
```

