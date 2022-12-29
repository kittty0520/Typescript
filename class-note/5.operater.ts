// function logMessage(value: string){
//     console.log(value);
// }
// logMessage('hello');
//logMessage(10); Argument of type 'number' is not assignable to parameter of type 'string'.


var SEHO: string | number | boolean;
function logMessage(value:string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('HELLOD');
logMessage(100);

interface Develop{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function askSomeone(someone: Develop | Person){
    someone.name;
    someone.age;
    someone.skill; //Property 'skill' does not exist on type 'Developer | Person'. Property 'skill' does not exist on type 'Person'
}

function askAnyone(anyone: Develop & Person){
    anyone.name;
    anyone.skill;
    anyone.age;
}

askSomeone({
    name: '디벨로퍼', skill: '웹 개발'
});

askSomeone({
    name: '디벨로퍼', age:20, 
})

askAnyone({
    name:'캡틴', age:20, skill:'웹개발'
})