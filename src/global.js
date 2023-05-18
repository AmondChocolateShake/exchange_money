//상품 데이터 양식
let product={
  name:"",
  price:0,
  count:0,
}

//상품 목록
export let products=[
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

//유로 환율 계산을 위한 고정값
export const WonRate=1370.0;

//상품 데이터 입력 함수
export function putProductData(data){
  product.name=data.name;
  product.price=data.price;
  product.count=data.count;
  console.log(data);
  addToList(product);
}


//상품 객체를 상품 리스트 배열에 삽입하는 함수
function addToList(obj){
  products.push(obj);
}

//상품 목록 객체를 반환하는 함수
export function getProducts(){
  return products;
}


//유로를 원화로 바꿔주는 함수
//리턴값 : 문자열
export function globalEuroToWon(euro){
  let parsedValue=parseFloat(euro);
  let result=parsedValue*WonRate;
  result=result.toString();
  return result
}

//원화를 유로로 바꿔주는 함수
//리턴값 : 문자열
export function globalWonToEuro(won){
  let parsedValue=parseFloat(won);
  let result=parsedValue/WonRate;
  result=result.toFixed(2);
  result=result.toString();
  console.log(result);
  return result;

}