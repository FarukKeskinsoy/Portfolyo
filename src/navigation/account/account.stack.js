import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Header } from '../../screens/account/header.screen';
import { LoginScreen } from '../../screens/account/login.screen';
import { RegisterScreen } from '../../screens/account/register.screen';

const Stack=createStackNavigator();

export const AccountNavigator=()=>{
    return(
<Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Header' component={Header}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
    </Stack.Navigator>
    )
    
}