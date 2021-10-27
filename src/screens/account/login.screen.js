import React, { useContext, useState } from 'react'
import { Text,View,TextInput,StyleSheet,TouchableOpacity, Platform,Dimensions, ImageBackground} from 'react-native'
import { AuthenticationContext } from '../../service/authentication.context'
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const LoginScreen=({navigation})=>{
const {onLogin,error}=useContext(AuthenticationContext)
const [email,setEmail]=useState("");
const [password,setPassword]=useState("")
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.textHeader}>
                Welcome Back!
            </Text>  
            </View>
            <Animatable.View

            animation='fadeInUpBig'
            style={styles.footer}>
            <ImageBackground
            style={{width:'100%',height:'100%'}}
            source={require('../../../assets/freePic/loginSon.png')}
            >
            <Animatable.View 
            animation='fadeInUpBig'
            duration={2000}
            style={styles.inputContainer}>
            <Feather name="user" size={24} color="black" />
            <TextInput
            style={styles.input}
            placeholder="e-posta"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u)=>setEmail(u)}
            />
            </Animatable.View>
            <Animatable.View 
            animation='fadeInUpBig'
            duration={3000}
            style={styles.inputContainer}>
            <MaterialCommunityIcons name="key" size={24} color="black" />
            <TextInput
            style={styles.input}
            placeholder="şifre"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p)=>setPassword(p)}
            />
            </Animatable.View>
            <Animatable.View
             animation='fadeInLeftBig'
             duration={2000}
             >
             <TouchableOpacity 
            onPress={()=>onLogin(email,password)}
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Giriş Yap
                </Text>
            </TouchableOpacity>
            </Animatable.View>
             <Animatable.View
             animation='fadeInLeftBig'
             duration={2500}
             >
             <TouchableOpacity 
            onPress={()=>navigation.goBack()}
            style={styles.button2}>
                <Text style={styles.button2Text}>
                    Geri Dön
                </Text>
            </TouchableOpacity>
            </Animatable.View>
             <Animatable.View
             animation='fadeInLeftBig'
             duration={3000}
             >
             <TouchableOpacity 
            onPress={()=>navigation.navigate('Register')}
            style={styles.button2}>
                <Text style={styles.button2Text}>
                    Kayıt Ol
                </Text>
            </TouchableOpacity>
            </Animatable.View>
            </ImageBackground>
            </Animatable.View>
        
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },  
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
    },
    footer:{
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    textHeader:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    textFooter:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    input:{
        padding:8,
        marginHorizontal:32,
        width:'70%',
        marginVertical:16,
        borderWidth:0.4,
        borderRadius:10,
        borderColor:'gainsboro',
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },

    //önemli style yukarıda
    button:{
        backgroundColor:'#009387',
        borderRadius:8,
        padding:8,
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8,
        alignSelf:'flex-end'
    },
    button2:{
        backgroundColor:'white',
        borderRadius:8,
        padding:8,
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8,
        alignSelf:'flex-end',
        borderColor:'#009387',
        borderWidth:1
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold'
    },
    button2Text:{
        color:'#009387',
        fontWeight:'bold'
    },
    shadow:{
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },inputContainer:{
        flexDirection:'row',
        alignItems:'center'
    }

})