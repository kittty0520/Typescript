interface User{
    age: number;
    name: string;
}

// 변수에 인터페이스를 활용
var seho: User = {
    age: 33,
    name:'세호',
}


// 함수에 인터페이스를 활용
function getUser(user : User){
    console.log(user);
}

const capt = {
    age: 44,
    name: '캡틴',
}

getUser(capt);


// 함수에 스텍(구조)에 인터페이스를 활용
interface SumFunction {
    (a:number, b:number): number;
}

var sum: SumFunction;

sum = function(a:number, b:number):number{
    return a+b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}

var arr : StringArray = ['a','b','c'];
//arr[0]=10;  Type 'number' is not assignable to type 'string'

//딕셔너리 패턴
interface StringRegexDictionary {
    [key:string]: RegExp;
}

var obj : StringRegexDictionary = {
    sth:/abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value){

});
//(parameter) value: string =>타입 추론


// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    langauge: string;
}

var captain: Developer = {
    name:'josh',
    langauge:'ts',
    age: 44,
}

