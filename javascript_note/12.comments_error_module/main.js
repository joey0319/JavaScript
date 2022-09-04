import { increase, getCount } from './counter.js'
// index.html로 연결되어 있기 때문에 counter.js의 함수나 값도 main.js에서 접근이 가능하다.
// 이렇게 커플링이 심하게 되어 있으면 버그가 발생하기 쉽다.
// html head에 type="module"을 써주면 접근이 안된다.
increase();
getCount();

