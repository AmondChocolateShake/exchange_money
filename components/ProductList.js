import {View} from 'react-native';

import ProductItem from './ProductItem';
import { getProducts } from '../src/global';

const ListContainer={
  flex:3,  

}

//상품이 담기는 리스트 컴포넌트 
const ProductList=(props)=>{
  const products=getProducts();


  return(
    <View style={ListContainer}>
      {products.map((item,index)=(
        <ProductItem
        key={index}
        name={item.name}
        price={item.price}
        count={item.count}
        ></ProductItem>
      ))}
      <ProductItem></ProductItem>
    </View>

  );
}


export default ProductList;

