// JSON : JavaScript Object Notation
// 서버와 클라이언트 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// JSON.stringify(object) => JSON 변환가능
// JSON.parse(JSON) => object  변환가능


const dongju = {
    name: 'dongju',
    age : 30,
    eat : () => {
        console.log('eat')
    }
}

// 직렬화 Serializing : 객체를 문자열로 변환
console.log('original-object', dongju)
const json = JSON.stringify(dongju)
console.log(json) // json으로 변환되면 eat함수는 출력되지 않는다!!
// json에는 객체의 상태만(데이터만) 포함된다.

// json을 다시 object를 바꿀 수도 있다.
// 역질력화 Deserializing : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json)
console.log(obj)