import React, { useState } from 'react'
import { SectionList, Text, View } from 'react-native'
import CardItem from './CardItem'

export default function BtSectionList() {
    const Menu_Data= useState([
        {title:'Điện Thoại', data:['ai phôn', 'xam xung', 'óp bồ']},
        {title:'Láp tốp', data:['Mắc Búc', 'Đeo', 'A xơ']},
        {title:'Máy tính bảng', data:['Ai bát', 'xam xung táp', 'Bí']},
    ])
  return (
  <View>
    <SectionList
        sections={Menu_Data[0]}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>(
            <CardItem nameEmployee={item} />
        )}
        renderSectionHeader={({section:{title}})=>(
            <View style={{backgroundColor:'gray', padding:5}}>
               <Text style={{fontSize:18, fontWeight:'700', color:'#fff'}}>{title}</Text>
            </View>
        )}
    />
  </View>
  )
}
