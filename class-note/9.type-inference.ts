//타입 추론 기본1
var a = 'a';    

function getB(b=10){
    var c ='hi';
    return b + c;
}

10+'10' //1010


// 타입 추론 기본2

// interface Dropdown<T>{
//     value: T;
//     title: string;
// }

// var shoppingItem : Dropdown<string> = {
//     value: 'BC',
//     title: 'Card'
// }

// 타입 추론 기본3
interface Dropdown<T>{
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag:K;
}

var detailedItem : DetailedDropdown<string> = {
    value: 'bc',
    title: 'Card',
    tag: 'ab'
}

//Best Common Type
var arr= [1,2, true, 'a'];
