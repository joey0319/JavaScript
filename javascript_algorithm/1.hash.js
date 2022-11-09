//1. hash를 선언하는 방법
let sh = new Map();

//2. key-value를 설정하는 방법
sh.set('key', 'value')

//3. value값을 얻는 방법
console.log(sh.get('key'))

//4. 기존의 key값이 이미 있다면?
sh.set('key', sh.get('key')+'plus')
console.log(sh)

//5. key값이 존재하는지 확인하려면?
console.log(sh.has('key')) // 있으니까 true
console.log(sh.has('key1')) // 없으니까 false

//6. key값 삭제하는 법
sh.delete('key')
console.log(sh)