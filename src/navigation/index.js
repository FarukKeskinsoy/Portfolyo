import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './app.navigator';
import { AuthenticationContext } from '../service/authentication.context';
import {AccountNavigator} from './account/account.stack'

export const Navigation=()=> {
  const {isAuthenticated}=useContext(AuthenticationContext)
  return (
    <NavigationContainer>
        {isAuthenticated?<DrawerNavigator/>:<AccountNavigator/>}
    </NavigationContainer>
  );
}