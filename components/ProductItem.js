import { useState } from 'react';
import {View,Text} from 'react-native'
import ItemInfo from './ItemInfo';
import ItemControl from './ItemControl'



const container={
  flex:1,
  flexDirection:"row",
  justifyContent:"space-between",
  borderWidth:1,
  borderColor:"black"

}
//상품 리스트 내부 상품 요소 담당 컴포넌트
const ProductItem=(props)=>{


  return(
    <View style={container}>
      {/* 아이템 정보를 담은 컴포넌트 */}
      <ItemInfo
      name={props.name}
      price={props.price}
      euro={props.euro}
      id={1}
      ></ItemInfo>

      {/* 아이템 정보를 컨트롤하는 컴포넌트 */}
      <ItemControl
      count={props.count}
      ></ItemControl>
    </View>

  );
}

export default ProductItem;