// 타입:any일 때
// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10); //숫자10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// 타입마다 함수를 정의할 때
// 각 타입마다 함수를 선언해야 하는 번거로움 발생
// function logNumber(text:string){
//     console.log(text);
//     return text;
// }

// function logNumber(num:number){
//     console.log(num);
//     return num;
// }
// const num = logNumber(10);


// 유니언 타입
// 메서드 함수를 쓸 때  두 개의 타입이 공통으로 쓸수 있는 것만 사용 가능
// function logText(text: string | number){
//     console.log(text);
//     return text;
// }

// const a = logText(10); 
// logText('하이');


// 제네릭 타입을 사용했을 때
function logText<T>(text:T):T{
    console.log(text);
    return text;
}

const str = logText<string>('하이');
str.split('');
const num = logText<number>(10);
const login = logText<boolean>(true);

//인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T>{
    value:T;
    selected:boolean;
}

const obj: Dropdown<string> = { value:'ABC', selected:false};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]) : T[] {
//     console.log(text.length);
//     text.forEach(function(text){
//         console.log(text);
//     })
//     return text;
// }

logTextLength<string>(['hi','abc']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType{
    length:number;
}

function logTextLength<T extends LengthType>(text:T):T{
    Text.length;
    return text;
}

logTextLength('a');
logTextLength({length:10});

// 제네릭의 타입제한 3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
