// try, catch, finally

function readFile(path) {
    throw new Error('파일의 경로를 찾을 수 없습니다.') // 이와 같이 error를 던지는 함수를 만들 수 있다.
    return '파일을 읽었습니다'
}

function processFile(path) {
    let content;
    try {
        content = readFile(path)
    } catch(error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
        content = '기본값 내용'
    } finally {
        console.log('성공하든 실패하든 마지막으로 리소스 정리 가능')
    }
    const result = 'hi' + content;
    return result;
}

const result = processFile('경로')
console.log(result)