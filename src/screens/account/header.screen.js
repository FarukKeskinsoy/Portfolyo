import React from 'react'
import { Text,View,TouchableOpacity,StyleSheet,Dimensions,Image,ImageBackground } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';




export const Header=({navigation})=>{
    return(
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Animatable.Image 
            animation='bounceIn'
            duration={2000}
            iterationCount='infinite'
            source={require('../../../assets/freePic/logo.png')}
            style={{width:150,height:150,borderRadius:80,resizeMode:'stretch'}}/>
        </View>
        <Animatable.View 
        animation='fadeInUpBig'
        style={styles.footer}>
                <ImageBackground
            style={{width:'100%',height:'100%'}}
            source={require('../../../assets/freePic/loginSon.png')}
            >
            <Text style={styles.footerTitle}>Stay connected!</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Login')}>
                
            <Text style={styles.buttonText}>Giriş Yap</Text>
            <MaterialIcons name="navigate-next" size={24} color="white" />
           
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Register')}>
                <Text  style={styles.buttonText}>Kayıt Ol</Text>
                <MaterialIcons name="navigate-next" size={24} color="white" />
            </TouchableOpacity>
            </View>
            </ImageBackground>
    </Animatable.View>    
    
    </View>
    )
    
}
const {height}=Dimensions.get('screen')
const heightLogo=height*0.28
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    input:{
        padding:8,
        marginHorizontal:32,
        width:'80%',
        marginVertical:16,
        borderBottomWidth:0.4,
        backgroundColor:'gainsboro'
    },
    button:{
        backgroundColor:'#08d4c4',
        borderRadius:8,
        padding:8,
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:16,
        flexDirection:'row'
    },
    buttonText:{
        color:'#fff',
        //fontWeight:'bold',
        fontFamily: 'Oswald_400Regular',
    },
    header:{
        fontSize:35,
        //fontWeight:'700',
        color:'black',
        fontFamily: 'Oswald_400Regular',
    },
    headerContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1.5,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:25,
        //justifyContent:'center',
        top:20,
        paddingTop:32,
        paddingHorizontal:32
        
        
    },buttonContainer:{
        marginTop:32,
        flexDirection:'row',
        alignSelf:'center',
        width:'100%'
        
    },footerTitle:{
        color:'black',
        fontFamily: 'Inter_900Black',
        fontSize:20
    }
})