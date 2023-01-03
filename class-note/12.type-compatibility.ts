interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person : Person;

//오른쪽 항의 변수는 왼쪽 항의 변수보다 구조적으로 크면서 왼쪽항의 변수를 포함하는 관계여야 한다.
//developer = person;
//person = developer;

var add = function(a: number){
    //console.log(a);
}

var sum = function(a:number, b:number){ 
    //return a+b;
}
sum = add;
//add = sum; // a sum is not assignable to a add 

//제네릭
interface Empty<T>{

}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T>{
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
