import React, { useEffect, useState } from 'react'
import {View} from 'react-native';

import ProductItem from './ProductItem';
import { getProducts, products } from '../src/global';

const ListContainer={
  flex:3,  
  borderWidth:1,
  borderColor:"black",
  height:"95%",
  maxHeight:"95%",
  justifyContent:"flex-start",
  alignItems:"center"

}

//상품이 담기는 리스트 컴포넌트 
const ProductList=(props)=>{
  const[list,setList]=useState(props.list);

  return(
    <View style={ListContainer}>
      {
        products.map((item,index)=>(
          <ProductItem
          key={index}
          name={item.name}
          price={item.price}
          count={item.count}
          />
        ))
      }
    </View>

  );
}


export default ProductList;

