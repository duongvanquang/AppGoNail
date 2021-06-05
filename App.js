import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './src/components/Onboarding';
import Login from './src/components/Login';
import Tabs from './src/navigation/Tab';
import Detail from './src/screens/Detail';
import Payment from './src/screens/Payment';
import Notification from './src/screens/Notification';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Evaluate from './src/screens/Evaluate';
import UserOrClient from './src/screens/UserOrClient'
import LoginUser from './src/components/LoginUser';
import MenuUser from './src/screens/MenuUser'


const reducers = combineReducers({
  cart: require('./src/screens/redux/Cart').reducer,
});
const store = createStore(reducers);
const Stack = createStackNavigator();
const App = () => {
  return (
    <View flex={1}>
      <Provider store={store}>
        <View flex={1}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="boarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="Detail" component={Detail} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="Evaluate" component={Evaluate} />
              <Stack.Screen name="UserOrClient" component={UserOrClient} />
              <Stack.Screen name="LoginUser" component={LoginUser} />
              <Stack.Screen name="MenuUser" component={MenuUser} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    </View>
  );
};
export default App;
