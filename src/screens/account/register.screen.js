import React, { useContext,useState} from 'react'
import { Text,TextInput,View,TouchableOpacity, StyleSheet,ImageBackground} from 'react-native'
import { AuthenticationContext } from '../../service/authentication.context'
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export const RegisterScreen=({navigation})=>{
    const { onRegister,isLoading, error}=useContext(AuthenticationContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const [seePass, setSeePass] = useState(true)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    Register
                </Text>
            </View>
            <Animatable.View
animation='fadeInUpBig' 
style={styles.footer}>
    <ImageBackground
            style={{width:'100%',height:'100%'}}
            source={require('../../../assets/freePic/loginSon.png')}
            >
            <Text style={styles.inputText}>E-mail address</Text>
            <View style={styles.inputContainer1}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
            style={styles.input}
            placeholder='e-meail'
            value={email}
            onChangeText={(u) => setEmail(u)}
            />
            </View>
            <Text style={styles.inputText}>Password</Text>
            <View style={styles.inputContainer}>
            <Foundation name="key" size={24} color="black" />
            <TextInput
            style={styles.input}
            placeholder='password'
            secureTextEntry={seePass?true:false}
            value={password}
            onChangeText={(u) => setPassword(u)}
            />
            <Feather
            style={styles.eye}
            onPress={()=>setSeePass(!seePass)}
            name={seePass?"eye-off":"eye"} 
            size={24} color="black" />
            </View>
            <Text style={styles.inputText}>Confirm your password</Text>
            <View style={styles.inputContainer}>
            <Foundation name="key" size={24} color="black" />
            <TextInput
            style={styles.input}
            secureTextEntry={seePass?true:false}
            placeholder='confirm password'
            value={repeatedPassword}
            onChangeText={(u) => setRepeatedPassword(u)}
            />
            <Feather
            style={styles.eye}
            onPress={()=>setSeePass(!seePass)}
            name={seePass?"eye-off":"eye"} 
            size={24} color="black" />
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => onRegister(email, password, repeatedPassword)}
            >
                <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Header')}      
            >
                <Text style={styles.button2Text}>İptal</Text>
            </TouchableOpacity>
            </ImageBackground>
            </Animatable.View>
            
        </View>
    );
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
    eye:{
        marginRight:16
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
        marginHorizontal:8,
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
    },buttonText:{
        color:'#fff',
        fontWeight:'bold'
    },
    button2Text:{
        color:'#009387',
        fontWeight:'bold'
    },
    inputText:{
        alignSelf:'flex-start',
        color:'grey'
    },inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },inputContainer1:{
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'space-around'
    }
})