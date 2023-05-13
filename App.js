import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import ItemControl from './components/ItemControl'

import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem';



export default function App() {
  const { width, height } = Dimensions.get('window');
  

  return (
    <View style={{width,height}}>
      {/* <View>
        <ProductList></ProductList>
        <InputContainer></InputContainer>
      </View> */}
      <ProductItem
      name="책"
      price={100000}
      euro={20000009}
      count={1}
      ></ProductItem>
      {/* <Text>hello</Text> */}
    </View>
  );
}

