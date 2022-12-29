//ES6

class Person{
    //클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

new Person(); //생성되었습니다.
var Seho = new Person('세호',30);
console.log(Seho);

