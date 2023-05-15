import { useState } from 'react'
import {Button, TextInput, View, Text} from 'react-native'
import { WonRate } from '../src/global'

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
  width:"80%",
  backgroundColor:""
}





//상품에 넣을 상품 정보 인풋들을 담는 컨테이너 컴포넌트
const InputContainer=(props)=>{
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[won,setWon]=useState("0");
  const[euro,setEuro]=useState("0");
  

  const exchangeWonToEuro=(Won)=>{
    setWon(Won);
    let parsedValue=parseInt(Won,10);
    console.log(parsedValue);
    const converted=parsedValue*Euro;
    parsedValue=converted.toString();
    setEuro(parsedValue);
  }

  const exchangeEuroToWon=(Euro)=>{
    setEuro(Euro);
    let converted=parseFloat(Euro);
    let result=converted*WonRate;
    result=result.toString();
    setWon(result);
  }

  const handleNameInput=(name)=>{
    setName(name);
  }

  const handlePriceInput=(price)=>{
    setPrice(price)
  }

  const handleEuroInput=(euro)=>{
    setEuro(euro);
  }

  return(
    <View style={container}>

      <View style={itemInputBox}>
          <TextInput 
          style={textInputSt}
          placeholder="Write a name"
          value={name}
          onChangeText={handleNameInput}
          ></TextInput>       

          <TextInput 
          style={textInputSt}
          placeholder="Price(won)"
          value={price}
          onChangeText={handlePriceInput}
          ></TextInput>  

          <View style={btnStyle}>
            <Button title='Insert'></Button>
          </View>      
      </View>

      <View style={switchBoxSt}>
        <Text>변환기</Text>
        <TextInput 
        style={textInputSt}
        placeholder="Won"
        value={won}
        // onChangeText={exchangeWonToEuro}
        ></TextInput>
        <TextInput style={textInputSt}
        placeholder="Euros"
        value={euro}
        onChangeText={exchangeEuroToWon}

        ></TextInput>
      </View>
    </View>
  );
}

export default InputContainer;