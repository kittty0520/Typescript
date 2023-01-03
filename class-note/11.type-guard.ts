interface Developer{
    name: string;
    skill:string;
}

interface Person{
    name: string;
    age: number;
}

function introduce() : Developer | Person {
    return {name: 'TONY', age: 33, skill:'Iron Making'}
}

// 공통된 속성만 제공하는 타입스크립트의 추론
var tony = introduce();
console.log(tony.name);

// 타입 단언하여 skill과 age를 사용함
if((tony as Developer).skill){
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드를 정의한 함수
function isDeveloper(target: Developer | Person) : target is Developer{
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)){
    console.log(tony.skill);
} else {
    console.log(tony.age);
}