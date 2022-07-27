const fruit = ['banana', 'apple', 'grape', 'peach']

// 배열아이템 참조하는 방법
console.log(fruit[0]);
console.log(fruit[2]);

// 배열길이 조회
console.log(fruit.length);

// 추가, 삭제 - 좋지 않은 방식!!!
// 인덱스로 추가하는 방식은 안좋다.
fruit[4] = 'melon'
console.log(fruit)

delete fruit[1];
console.log(fruit) // 삭제되고 empty item으로 남아있다. 좋지않다.
