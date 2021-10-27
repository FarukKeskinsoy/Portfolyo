import React, { useContext } from 'react'
import { Text,View,StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LanguageContext } from '../service/language.context';

export const HomeScreen=({navigation})=>{
    const {language}=useContext(LanguageContext)
    return(
        <View style={styles.container}>
        <View style={{marginLeft:8,marginTop:16}}>
        <Ionicons name="ios-menu-outline" size={32} 
        color="black"
        onPress={()=>navigation.toggleDrawer()} />
        </View>
                        
            <TouchableOpacity 
            onPress={()=>navigation.navigate('PostViews')}
            style={styles.subContainer}>
            <Image
            source={require('../../assets/freePic/yeniposts.png')}
            style={{resizeMode:'cover',width:'100%',height:'75%',borderRadius:10}}
            />
            <View style={{justifyContent:'center',alignSelf:'flex-end',padding:8}}>
                <Text style={styles.text}>{language[8]}</Text>
                <Text style={styles.text2}>{language[9]}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Users')}
            style={styles.subContainer}>
            <Image
            source={require('../../assets/freePic/userKapak.png')}
            style={{resizeMode:'cover',width:'100%',height:'75%',borderRadius:10}}
            />
            <View style={{justifyContent:'center',alignSelf:'flex-end',padding:8}}>
                <Text style={styles.text}>{language[10]}</Text>
                <Text style={styles.text2}>{language[11]}</Text>
            </View>
            </TouchableOpacity>
            
            <View style={{height:80}}/>
        </View>
    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop:16
        },
        subContainer:{
            width:'95%',
            height:'35%',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#fff',
            alignSelf:'center',
            borderRadius:10,
            marginVertical:8,
            //shadow issues
            shadowColor:'black',
            shadowOffset:{
                width:0,
                height:5
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:5
        },shadow:{
            shadowColor:'black',
            shadowOffset:{
                width:0,
                height:5
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:5
        },
        text:{
            fontWeight:'600',
            fontSize:20,
            textAlign:'right',
            fontFamily:'Oswald_400Regular'
        },
        text2:{
            color:'grey',
            fontSize:12,
            fontFamily:'Lato_400Regular',
        },line:{
            position:'absolute',
            height:'15%',
            width:'100%',
            marginBottom:16,

        }
      });