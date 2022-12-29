// 함수의 파라미터에 타입을 정의하는 방식
function substrate(a:nubmer, b:number){
    return a-b;
}

substrate(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function ten():number {
    return 10;
}

// 함수에 타입을 정의하는 방식

function multiple(a:number, b:number) : number{
    return a*b;
}
multiple(2,3);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string){
}

log('hello world','a','b');
log('hello world');