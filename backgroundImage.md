# 1. 배경이미지 설정 방법

#### 1. backgroundUrl 설정

```javascript
const backgroundUrl = `./images/${randomPath}.jpg`
```

#### 2. body의 배경화면 이미지 경로 설정

```javascript
document.body.style.background = "url('"+backgroundUrl+"')"
// 위와 같은 양식을 지켜줘야 한다.
```



# 2. lodash를 활용한 random sample

#### 1. ladash import

```javascript
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

<script>
    // js 코드 작성
</script>
```

#### 2. 다양한 함수 활용하기

```javascript
// 사용법은 underscore이용 ex) _.sample()

// 1. sample
random = _.sample([1,2,3,4,5,6]) // 1부터 6중에 랜덤하게 하나 뽑음
// 2. sampleSize
random = _.sampleSize([1,2,3,4],2) // 주어진 숫자에서 랜덤하게 2개 뽑음
// 3. range
range = _.range(5) // 0부터 4까지 배열 반환
// 4. reverse
reversed = _.reverse([1,2,3,4]) // [4,3,2,1]이 반환됨
```

# 3. new date()

#### 1. new Date()를 통해 날짜 및 시간정보 불러오기

```javascript
const now = new Date()
```

#### 2. 다양한 메서드 활용하기

```javascript
// 사용법
const year = now.getFullYear

// 1. getFullYear
// 2. getDate
// 3. getSeconds
// 4. getHours
// 5. toLocaleTimeString
// 등등
```

