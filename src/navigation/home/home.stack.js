import React from 'react'
import { Text,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../screens/Home';

import { PostViews } from '../../screens/post.views';
import { SocialScreen } from '../../screens/social.screen';
import { ProductScreen } from '../../screens/product.screen';
import { Ionicons } from '@expo/vector-icons';
import { UsersScreen } from '../../screens/users.screen';
import { UserDetail } from '../../screens/user.detail';
import { PostDetail } from '../../screens/post.detail.screen';
const Stack=createStackNavigator();

export const HomeStack=()=>{
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='PostViews' component={PostViews}/>
            <Stack.Screen name='PostViewSosyal' component={SocialScreen}/>
            <Stack.Screen name='PostViewProduct' component={ProductScreen}/>
            <Stack.Screen name='Users' component={UsersScreen}/>
            <Stack.Screen name='User Detail' component={UserDetail}/>
            <Stack.Screen name='Post Detail' component={PostDetail}/>
        </Stack.Navigator>
    )
}