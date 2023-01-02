// 타입 단언(type assertion)
var a;
a=20;
a='a';
var b = a as string;


// Dom API :웹페이지의 태그 정보에 접근하고 조작할 수 있는 API 


var div = document.querySelector("div"); //div의 타입은  HTMLDivElement | null.
if(div){
    div.innerText;
} //div값이 null일수도 있기 때문에 if문으로 에러를 방지

var element = document.querySelector('class') as HTMLDivElement; //element의 타입을 HTMLDivElement으로 단언함
element.innerText;// 타입 단언함으로써 바로 접근해서 쓸 수 있도록 함