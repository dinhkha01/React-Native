// import Detail from '@/components/Detail';
import Home from '@/components/Home';
import Item from '@/components/Item';
// import Item from '@/components/Item';
import Profile from '@/components/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const YourApp = () => {
  const data = [{id:1,name:'John'},{id:2,name:'Doe',},{id:3,name:'Smith'}];

  return (  
    <View style={{flex:1}}>
      {/* <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />  
      </Stack.Navigator> */}
      {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Profile" component={Profile} />
      
      </Tab.Navigator> */}

      {/* <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Detail" component={Detail} />
      <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =><Item data={item} />}
      />

    </View>
  
   
  );  
};

export default YourApp;