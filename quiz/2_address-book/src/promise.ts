function fetchItems() {
  let items = ['a', 'b', 'c'];
  return items;
}
let result = fetchItems();
console.log(result); //string 배열이 반환됨


//함수를 실행하는 시점에서 promise내부의 비동기적 코드의 타입을 알 수 없다.(unknown)=>제네릭타입 사용해야 한다.
function fetchItems():Promise<string[]>{
    let items = ['a', 'b', 'c'];
    return new Promise(function(resolve){
        resolve(items);
    });
}