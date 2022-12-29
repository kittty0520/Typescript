function add(a: number,b: number) :number{
    return a+b;
}

add(10,'20');

var result = add(10,20);

result.toLocaleString(); //number의 정적메서드(api?)를 바로 쓸수 있음