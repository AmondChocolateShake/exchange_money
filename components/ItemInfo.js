import React,{ useState } from 'react';
import {View,Text} from 'react-native'


const itemInfoBox={
  flex:2,
  backgroundColor:"red"
}

const nameBox={
  flex:1,
  flexDirection:"row"
}



//아이템 이름,가격,정보 등을 담은 컴포넌트
const ItemInfo=(props)=>{
  const[name,setName]=useState(props.name);
  const[price,setPrice]=useState(props.price);
  const[euro,setEuro]=useState(props.euro);

  return(
    <View style={itemInfoBox}>

      <View style={nameBox}>
        <Text>{name}</Text>
      </View>

      <View>
        <Text>{price}</Text>
      </View>

      <View>
        <Text>{euro}</Text>
      </View>
    </View>
  );
}

export default ItemInfo;