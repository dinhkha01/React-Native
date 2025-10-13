import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from './Account';
import Bill from './Bill';
import Home from './Home';

const Tab = createBottomTabNavigator();

const YourApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Trang chủ') {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === 'Hóa đơn') {
            return <MaterialCommunityIcons name="file-document-outline" size={size} color={color} />;
          } else if (route.name === 'Tài khoản') {
            return <AntDesign name="user" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Trang chủ" component={Home} />
      <Tab.Screen name="Hóa đơn" component={Bill} />
      <Tab.Screen name="Tài khoản" component={Account} />
    </Tab.Navigator>
  );
};

export default YourApp;