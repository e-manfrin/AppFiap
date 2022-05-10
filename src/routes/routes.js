import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../view/LoginScreen';
import SignupScreen from '../view/CadastrarScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
 return (
   <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'>
           <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
           <Stack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
       </Stack.Navigator>
   </NavigationContainer>
  );
}