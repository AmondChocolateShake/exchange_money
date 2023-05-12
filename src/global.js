//상품 데이터 양식
const product={
  name:"",
  price:0,
  count:0,
  key:0
}
const products=[]


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
