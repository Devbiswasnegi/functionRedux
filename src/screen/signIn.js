import React from 'react'
import {View,TextInput,TouchableOpacity,Text} from 'react-native'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {add} from '../action'

const sign=()=>{
    const counter = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("dis",counter)
  console.log("tree",dispatch)
    return(
<View>
    
    
    <TextInput style={{height:50,width:300,borderWidth:1}}
    onChangeText={(text)=>dispatch(add(text))}
    
    />
    <Text>{counter.email}</Text>
</View>
    )
}

export default sign;