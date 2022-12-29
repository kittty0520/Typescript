// function sum(a,b){
//     return a+b;
// }

// sum(10,'20'); 1020
// var result = sum(10,20);
// result.toLocaleString(); 
//result가 number type이 아니기때문에 자동완성 기능을 사용할 수 없다.=>오타방지불가


//자바스크립트에서 타입스크립트와 같은 효과를 줌
// @ts-check 

/**
 * 
 * @param {number} a 첫번째 숫자 
 * @param {number} b 두번째 숫자
 * @returns 
 */
function sum(a,b){
    return a+b;
}

sum(10,''); //12