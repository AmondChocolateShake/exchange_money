import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

import { products } from './src/global';
import InputContainer from './components/InputContainer'
import ItemControl from './components/ItemControl'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem';
import TotalBox from './components/TotalBox';
import { useEffect, useState } from 'react';

const container={
  flex:1,
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}

const innerContainer={
  width:"95%",
  height:"90%"
}


const productSt={
  flex:5,
  flexDirection:"row",
}


export default function App() {
  // const { width, height } = Dimensions.get('window');
  const[list,setList]=useState();


  useEffect(()=>{
    setList(products);
    console.log(products);
  },[products])

  return (
    <View style={container}>
      <View style={innerContainer}>

        <View style={productSt}>
          <ProductList list={list}></ProductList>
          <InputContainer></InputContainer>
        </View>
        {/* <ProductItem
        name="책"
        price={100000}
        euro={20000009}
        count={1}
        ></ProductItem> */}
        <TotalBox></TotalBox>

      </View>
    </View>
  );
}

