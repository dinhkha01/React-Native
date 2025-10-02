
import BtFlatList from '@/components/BtFlatList';
import BtSectionList from '@/components/BtSectionList';
import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

const YourApp = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>


    {/* <BtFlatList/> */}
    <BtSectionList/>


    </SafeAreaView>
 
  );
};

export default YourApp;