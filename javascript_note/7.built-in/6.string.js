const textObj = new String('Hello World')
const text = 'Hello World'
console.log(textObj)
console.log(text)

console.log(text[4])
console.log(text.charAt(4)) // 4번째 인덱스의 문자를 반환함

console.log(text.length) // 문자열의 길이를 반환

console.log(text.indexOf('l')) // l의 인덱스 중 첫번째를 반환
console.log(text.lastIndexOf('l')) // 끝에서부터 찾아서 처음으로 찾은 l의 인덱스 반환

console.log(text.includes('he')) // 'he'문자열을 포함하는지 안하는지
console.log(text.includes('He'))

console.log(text.startsWith('He'))
console.log(text.endsWith('!'))

console.log(text.toUpperCase()) // 모두 대문자로 변환한 새로운 문자열 반환
console.log(text.toLowerCase()) // 전부 소문자로 변환한 새로운 문자 반환

console.log(text.substring(0, 4)) //0부터 4 인덱스 이전까지 부분적인 문자열을 가져온다.
console.log(text.slice(2)) // 인덱스 2부터 끝까지 잘라내서 반환함
console.log(text.slice(-2)) // 뒤에서부터 -2까지 잘라서 반환함 맨 끝이 -1

const space = '       space   '
console.log(space.trim()) // 공백제거

const longText = 'Get to the point'
console.log(longText.split(' ')) // 입력된 기준에 따라 끊어서 배열로 반환
console.log(longText.split(' ', 2)) // 끊어진것 중 2개만 받고싶으면 숫자입력
