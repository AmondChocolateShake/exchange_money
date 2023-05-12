import {Button, View, TextInput} from 'react-native'
import {} from 'react'


//상품 아이템 내부 아이템 수량과 삭제를 담당하는 컴포넌트
const ItemControl=()=>{
  const[count,setCount]=useState(props.count);

  return(
    <View>
      <Button></Button>
      <TextInput></TextInput>
      <View>
        <Button></Button>
        <Button></Button>
      </View>
    </View>

  );
}


export default ItemControl;


