import {Button, View, TextInput} from 'react-native'
import {useState} from 'react'

const cntController={
  flex:1,
  flexDirection:"row",

}

const btnSize={
  width:30,
  height:30,
  
}

const inputSt={
  width:30,
  height:30,
  borderWidth:1,
  borderColor:"gray"

}

const container={
  flex:1,
  alignItems:"center"

}


//상품 아이템 내부 아이템 수량과 삭제를 담당하는 컴포넌트
const ItemControl=(props)=>{
  const[count,setCount]=useState(props.count);

  return(
    <View style={container}>
      <View style={btnSize}>
        <Button title="X" color="grey"></Button>
      </View>

      <View>
        <TextInput style={inputSt}></TextInput>
      </View>

      <View style={cntController}>
        <View style={btnSize}>
          <Button title="-" color="grey"></Button>
        </View>

        <View style={btnSize}>
          <Button title="+" color="grey"></Button>
        </View>
      </View>
    </View>

  );
}


export default ItemControl;


