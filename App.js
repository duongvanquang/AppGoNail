import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/components/Onboarding'
import Login from './src/components/Login'
import Tabs from './src/navigation/Tab';


const Stack = createStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="boarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;