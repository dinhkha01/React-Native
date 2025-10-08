import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddContactScreen from './screens/AddContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Contact" component={AddContactScreen} />
        <Stack.Screen name="Edit Contact" component={EditContactScreen} />
        <Stack.Screen name="Contact Detail" component={ContactDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}