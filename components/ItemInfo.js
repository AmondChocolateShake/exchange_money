import {View} from 'react-native'




//아이템 이름,가격,정보 등을 담은 컴포넌트
const ItemInfo=(props)=>{
  const[name,setName]=useState(props.name);
  const[price,setPrice]=useState(props.price);
  const[euro,setEuro]=useState(props.euro);
  const[count,setCount]=useState(props.count);

  
  return(
    <View>
      <View>
        <View>
          <Text>{}</Text>
        </View>
        <View>

        </View>
      </View>

      <View>

      </View>

      <View>

      </View>
    </View>
  );
}

export default ItemInfo;