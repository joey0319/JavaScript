// global 조회
console.log(globalThis);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));

console.log(parseFloat('123.34'));
console.log(parseInt('12.43'));

// URL (URI의 하위개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리를 해줘야 한다.
const URL = 'https://자바스크립트.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component를 이용
const part = '자바스크립트.com';
console.log(encodeURIComponent(part));