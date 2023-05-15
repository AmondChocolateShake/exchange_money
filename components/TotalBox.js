import {View, Text} from 'react-native'


const container={
  width:"95%",
  flex:1,
  borderWidth:1,
  borderColor:"black",

}

const innerBox1={
  flex:1,
}

const fontSt={
  fontSize:25,
  fontWeight:"semibold",
}

const innerBox2={
  flex:1
}


//총 개수 와 총 값을 표현하는 박스
const TotalBox=()=>{
  return(
    <View style={container}>
      <View style={innerBox1}>
        <Text style={fontSt}>Total : </Text>
        <Text>{}</Text>
      </View>


      <View style={innerBox2}>

      </View>
    </View>
  );
}

export default TotalBox;