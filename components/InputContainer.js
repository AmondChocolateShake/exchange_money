import { useState } from 'react'
import {Button, TextInput, View, Text} from 'react-native'
import { WonRate, globalEuroToWon, globalWonToEuro, putProductData } from '../src/global'

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

const box={
  width:"100%",
  alignItems:"center"
}




//상품에 넣을 상품 정보 인풋들을 담는 컨테이너 컴포넌트
const InputContainer=(props)=>{
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[won,setWon]=useState("");
  const[euro,setEuro]=useState("");
  

  const exchangeWonToEuro=(Won)=>{
    setWon(Won);
    result=globalWonToEuro(Won);
    setEuro(result);
  }



  const exchangeEuroToWon=(Euro)=>{
    setEuro(Euro);
    result=globalEuroToWon(Euro);
    setWon(result);
  }


  //이름 입력 함수
  const handleNameInput=(name)=>{
    setName(name);
  }


  //가격 입력 함수
  const handlePriceInput=(price)=>{
    setPrice(price)
  }

  //상품 리스트에 상품 정보 입력하기
  const putProductToList=()=>{
    const obj={
      name:name,
      price:price,
      count:1
    }
    putProductData(obj);

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
            <Button title='Insert' onPress={putProductToList}></Button>
          </View>      
      </View>

      <View style={switchBoxSt}>

        <Text>변환기</Text>

        {/* Won */}
        <View style={box}>
          <Text>Won</Text>
          <TextInput 
          style={textInputSt}
          placeholder="Won"
          value={won}
          onChangeText={exchangeWonToEuro}
          ></TextInput>
        </View>

        {/* Euro */}
        <View style={box}>
          <Text>Euro</Text>
          <TextInput style={textInputSt}
          placeholder="Euros"
          value={euro}
          onChangeText={exchangeEuroToWon}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

export default InputContainer;