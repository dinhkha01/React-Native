import Header from '@/components/Header';
import ProductsGrid from '@/components/ProductsGrid';
import React from 'react';
import { View } from 'react-native';

const YourApp = () => {
  return (
  <View style={{flex:1}}>
      <Header title="Danh sách sản phẩm"/>
      <ProductsGrid/>
  </View>
)
};

export default YourApp;