// 조건문 Conditional Statement

// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우 사용한다.

let day = 6; // 0: 월요일, 1: 화요일.... 6: 일요일

let dayName;

// if문으로 쓰면 복잡하다.
if (day === 0) {
    dayName = '월'
} else if (day === 1) {
     dayName = '화'
}

// switch문으로 간결하게 보일 수 있다. break를 신경써야 한다.
switch(day) {
    case 0:
        dayName = '월'
        break;
    case 1:
        dayName = '화'
        break;
    case 2:
        dayName = '수'
        break;
    case 3:
        dayName = '목'
        break
    default:
        console.log('해당한느 요일이 없음!')
}