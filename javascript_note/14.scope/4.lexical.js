// 실행 컨텍스트
// 코드의 실행순서와 스코프를 기억한다!
// 각각의 블럭은 렉시컬 환경이라는 내부 오브젝트를 가지고 있다.
// 부모는 누구인지, 범위는 어디인지 등등의 정보를 가지고 있다.

// 렉시컬 환경에는 두가지가 있다.
// 환경레코드 : 현재 블록의 정보를 담고있음
// 외부 렉시컬 환경 참조 : 부모는 누구인지(스코프 체인을 통해 가르키고 있다.)


