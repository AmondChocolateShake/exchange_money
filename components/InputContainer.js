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

const itemInputBox={
  flex:1,
  justifyContent:"space-around",
  backgroundColor:"yellow",
  alignItems:"center"

}

const switchBoxSt={
  flex:1,
  justifyContent:"space-around",
  alignItems:"center"
}

const btnStyle={
  width:"80%"
}


//상품에 넣을 상품 정보 인풋들을 담는 컨테이너 컴포넌트
const InputContainer=(props)=>{

  
  return(
    <View style={container}>

      <View style={itemInputBox}>
          <TextInput style={textInputSt}></TextInput>        
          <TextInput style={textInputSt}></TextInput>  
          <View style={btnStyle}>
            <Button title='Insert'></Button>
          </View>      
      </View>

      <View style={switchBoxSt}>
        <Text>변환기</Text>
        <TextInput style={textInputSt}></TextInput>
        <TextInput style={textInputSt}></TextInput>
      </View>
    </View>
  );
}

export default InputContainer;