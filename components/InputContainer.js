import {Button, TextInput, View} from 'react-native'

const textInputSt={
  height:30
}

const container={
  flex:2,
  
}

//상품에 넣을 상품 정보 인풋들을 담는 컨테이너 컴포넌트
const InputContainer=(props)=>{

  
  return(
    <View style={container}>

      <View>
        <TextInput style={textInputSt}></TextInput>
        <TextInput style={textInputSt}></TextInput>
        <View>
          <Button title='Insert'></Button>
        </View>
      </View>

      <View>
        <TextInput style={textInputSt}></TextInput>
        <TextInput style={textInputSt}></TextInput>
      </View>
    </View>
  );
}

export default InputContainer;