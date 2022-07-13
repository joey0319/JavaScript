// null vs undefined

// 값이 있는지 없는지 정해지지 않는 상태
let variable;
console.log(variable); // undefined

// 값이 없다는 것을 의도적으로 할당
// 이 변수는 비어있다는 것을 나타냄
variable = null;

let activeItem; // 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

// null은 object 타입이고 undefined는 undefined타입이다.
console.log(typeof null); //Object
console.log(typeof undefined); //undefined