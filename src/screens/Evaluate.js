import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { COLORS } from '../constants';

const Evaluate = ({route}) =>{
    const item = route.params
    return(
        <View style  ={{ flex:1,backgroundColor:COLORS.green}}>
           <FlatList 
           data ={item}
           renderItem ={renderItem}
           keyExtractor={item=>`${item.id}`}
           />
        </View>
    )
}
export default Evaluate;