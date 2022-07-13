// 증가 & 감소 연산자 increment, decrement

let a = 0;
console.log(a);
a = a + 1;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

// 주의! 사항!!

// a++ 필요한 연산을 하고 그 뒤 값을 증가시킴
a = 0;
let b = a++; //(필요한 연산)할당을 먼저하고 그 다음 a의값을 증가시킨다.
console.log(b) //0

// ++a 값을 먼저 증가시키고 필요한 연산을 함
a = 0;
let c = ++a; // 값을 먼저 증가시키고 필요한 연산(할당)을 함
console.log(c)

let c = 0;
console.log(c++); // 0 먼저 필요한연산(로그출력)하고 값을 증가시킴
console.log(++c); //2 먼저 값을 증가시키고 필요연산(로그출력)을 함