import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { rootReducer } from './src/store/reducers';

const store = rootReducer;

import CustomDrawer from './src/navigation/CustomDrawer';
import { OnBoarding, SignIn, SignUp, Otp, ForgotPassword } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'OnBoarding'}
        >
          <Stack.Screen name='OnBoarding' component={OnBoarding} />
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='Home' component={CustomDrawer} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Otp' component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export type RootStackParamList = {
  Home: undefined;
  OnBoarding: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  Otp: undefined;
};

export default App;
