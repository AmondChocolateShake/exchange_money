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
  const[name,setName]=useState(props.name);
  const[price,setPrice]=useState(props.price);
  const[euro,setEuro]=useState(props.euro);
  const[count,setCount]=useState(props.count);


  return(
    <View style={container}>
      <ItemInfo></ItemInfo>
      <ItemControl></ItemControl>
    </View>

  );
}

export default ProductItem;