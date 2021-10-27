import React, { useContext } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/Home';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { CustomizeScreen } from '../screens/customize.screen';
import { SettingsScreen } from '../screens/settings.screen';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack } from './home/home.stack';
import { StyleSheet,Text,View } from 'react-native';
import { LanguageContext } from '../service/language.context';



const Tab=createBottomTabNavigator();

export const TabNavigator=()=>{
    const {language}=useContext(LanguageContext)
    return(
        <Tab.Navigator 
        initialRouteName='Pomodoro' screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                bottom:5,
                left:10,
                right:10,
                elevation:5,
                borderRadius:15,
                height:70,
                
                
                ...styles.shadow
            }
            
        }}
        >
            <Tab.Screen name='HomeStack' component={HomeStack}
            options={{tabBarIcon:({focused})=>(
            <View style={styles.ıconContainer}>
            <AntDesign name="home" size={24} color={focused? "#e32f45":'#748c94'} />
            <Text style={{color:focused? "#e32f45":'#748c94',fontSize:12}}>{language[0]}</Text>
            </View>)
        }}/>
            <Tab.Screen name='Customize' component={CustomizeScreen}
            options={{tabBarIcon:({focused})=>(<View style={styles.ıconContainer}>
                <MaterialIcons name="dashboard-customize" size={24} color={focused? "#e32f45":'#748c94'} />
                <Text style={{color:focused? "#e32f45":'#748c94',fontSize:12}}>{language[6]}</Text>
                </View>)}}/>
            <Tab.Screen name='Settings' component={SettingsScreen}
            options={{tabBarIcon:({focused})=>(<View style={styles.ıconContainer}>
                <Ionicons name="ios-settings-outline" size={24} color={focused? "#e32f45":'#748c94'} />
                <Text style={{color:focused? "#e32f45":'#748c94',fontSize:12}}>{language[7]}</Text>
                </View>)}}/>
        </Tab.Navigator>
    );
}
const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7f5df0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    ıconContainer:{
        alignItems:'center',
        justifyContent:'center',
        
    },
})