interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts() : Promise<Product[]>{
 return new Promise();
}

// interface ProductDetail {
//     id:number;
//     name:string;
//     price:number;
// }

// 2. 특정 삼품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem){

}


// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
type UpdateProduct = Partial<Product>
function updateProductItem(productItem: UpdateProduct){

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile{
    username: string;
    email: string;
    profilePhotoUrl:string;
}

interface UserProfileUpdate = {
    username?: string;
    email?: string;
    profilePhotoUrl?:string;
}

// #1
type UserProfileUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?:UserProfile['profilePhotoUrl'];
// }

// #2 - 맵드 타입(Mapped Type)
type UserProfileUpdate {
    [p in 'username' | 'email' | 'profilePhotoUrl']? : UserProfile[p]
} 
// in operator: 반복문

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]? : UserProfile[p]
}

// #4
type Subset<T> = {
    [p in keyof T]? : T[p]
}