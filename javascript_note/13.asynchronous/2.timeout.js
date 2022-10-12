function execute() {
    console.log("1");
    setTimeout(() => { // settimeout은 node api를 사용하는 것이다.
        console.log('2')
    }, 3000);
    console.log('3')
}

execute();
// 1,3,2순서로 출력이 된다. 비동기적으로 처리되기 때문에