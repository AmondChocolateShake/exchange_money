import {Button, TextInput, View, Text} from 'react-native'

const textInputSt={
  width:"80%",
  height:30,
  borderWidth:1,
  borderColor:"gray"
  
}

const container={
  flex:2,
  maxHeight:"70%",
  justifyContent:"flex-start",
  backgroundColor:"green",

}

const itemInput={
  flex:1,
  justifyContent:"space-around",
  backgroundColor:"yellow",
  alignItems:"center"

}

const switchSt={
  flex:1,
  justifyContent:"space-around",
  alignItems:"center"
}

//상품에 넣을 상품 정보 인풋들을 담는 컨테이너 컴포넌트
const InputContainer=(props)=>{

  
  return(
    <View style={container}>

      <View style={itemInput}>
        <View>
          <TextInput style={textInputSt}></TextInput>
        </View>
        <View>
          <TextInput style={textInputSt}></TextInput>
        </View>
        <View>
          <Button title='Insert'></Button>
        </View>
      </View>

      <View style={switchSt}>
        <Text>변환기</Text>
        <TextInput style={textInputSt}></TextInput>
        <TextInput style={textInputSt}></TextInput>
      </View>
    </View>
  );
}

export default InputContainer;