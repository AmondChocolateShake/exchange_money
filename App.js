import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

import InputContainer from './components/InputContainer'
import ItemControl from './components/ItemControl'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem';
import TotalBox from './components/TotalBox';

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
  

  return (
    <View style={container}>
      <View style={innerContainer}>

        <View style={productSt}>
          <ProductList></ProductList>
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

