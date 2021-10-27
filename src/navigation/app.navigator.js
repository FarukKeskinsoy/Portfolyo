import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigator } from './tab.navigator';
import { DrawerContent } from './drawer.content';
const Drawer=createDrawerNavigator();

export const DrawerNavigator=({navigation})=>{
    return(
        <Drawer.Navigator 
        screenOptions={{headerShown:false}}
        drawerContent={props=><DrawerContent {...props}/>}>
            <Drawer.Screen name='Home Drawer' component={TabNavigator} 
            options={{title:''}}
            />
        </Drawer.Navigator>
    );
}