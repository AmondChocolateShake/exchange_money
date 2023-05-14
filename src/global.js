//상품 데이터 양식
const product={
  name:"",
  price:0,
  count:0,
}
export const products=[
  {
    name:"라면",
    price:1000,
    count:1,
  },
  {
    name:"라면",
    price:1000,
    count:1,
  },
  {
    name:"라면",
    price:1000,
    count:1,
  }


]


//상품 데이터 입력 함수
export function putProductData(data){
  product.name=data.name;
  product.price=data.price;
  product.count=data.count;
  product.key=data.key;
  addToList(product);
}


//상품 객체를 상품 리스트 배열에 삽입하는 함수
function addToList(obj){
  products=[...product,obj];
  console.log(product);
}


export function getProducts(){
  return products;
}