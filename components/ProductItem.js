import { useState } from 'react';
import {View} from 'react-native'
import ItemInfo from './ItemInfo';
import ItemControl from './ItemControl'

const container={
  flex:"1",
  flexDirection:"row",
  justifyContent:"space-around",

}


//상품 리스트 내부 상품 요소 담당 컴포넌트
const ProductItem=(props)=>{


  return(
    <View style={container}>
      <ItemInfo
      name={props.name}
      price={props.price}
      euro={props.euro}
      ></ItemInfo>

      
      <ItemControl
      count={props.count}
      ></ItemControl>
    </View>

  );
}

export default ProductItem;