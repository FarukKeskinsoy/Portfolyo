import React, { useContext } from 'react'
import { Text,StyleSheet,View, TouchableOpacity, TextInput, ActivityIndicator, Image, ScrollView, Alert } from 'react-native'
import { AuthenticationContext } from '../service/authentication.context'
import { SimpleLineIcons } from '@expo/vector-icons';
import { UserContext } from '../service/user.context';
import { useState } from 'react/cjs/react.development';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import firebase from 'firebase';

export const SettingsScreen=({navigation})=>{
    const {onLogout,user,onRegister}=useContext(AuthenticationContext)
    const { userName,setUserName,
        userPhone,setUserPhone,
        userLastName,setUserLastName,
        AddUserInfo,
        GetThisUser,
        userLoading,
        city,setCity,
            country,setCountry,
            province,setProvince,
        AddNewInfo,
        isNewUser,isNew}=useContext(UserContext)
    const [changeName,setChangeName]=useState(false);
    const [changeLastName,setChangeLastName]=useState(false);
    const [changeCity,setChangeCity]=useState(false);
    const [changeProvince,setChangeProvince]=useState(false);
    const [changePhone,setChangePhone]=useState(false);
    const [scene,setScene]=useState(true);
    isNewUser()
    GetThisUser()
    return(
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            onPress={onLogout}
            ><Text style={{marginRight:10}}>
                 Çıkış Yap
                </Text>
                <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView>

                {isNew&&<View style={styles.firstTouch}>
                <Text style={styles.cardTitle}>Profili Tamamla</Text>
                <View style={styles.subFirst}>
                <Feather name="user" size={24} color="black" />
                <TextInput
                style={styles.input}
                placeholder='Adınızı giriniz'
                //value={userName}
                onChangeText={(txt)=>setUserName(txt)}
                />
                </View>
                
                <View style={styles.subFirst}>
                <Feather name="user" size={24} color="black" />
                <TextInput
                style={styles.input}
                placeholder='Soyadınızı giriniz'
                //value={userLastName}
                onChangeText={(txt)=>setUserLastName(txt)}
                />
                </View>


                <View style={styles.subFirst}>
                <FontAwesome name="phone" size={24} color="black" />
                <TextInput
                style={styles.input}
                placeholder='Telefon Numaranızı giriniz'
                //value={userPhone}
                onChangeText={(txt)=>setUserPhone(txt)}
                />
                </View>

                <View style={styles.subFirst}>
                <Fontisto name="world-o" size={24} color="black" />
                <TextInput
                style={styles.input}
                placeholder='Ülke'
                //value={country}
                onChangeText={(txt)=>setCountry(txt)}
                />
                </View>

                <View style={styles.subFirst}>
                <EvilIcons name="location" size={24} color="black" />
                <TextInput
                style={styles.input}
                placeholder='Şehir'
                //value={city}
                onChangeText={(txt)=>setCity(txt)}
                />
                </View>

                <View style={styles.subFirst}>
               <FontAwesome5 name="search-location" size={24} color="black" />
                <TextInput
                style={styles.input}
                placeholder='İlçe'
                //value={province}
                onChangeText={(txt)=>setProvince(txt)}
                />
                </View>
                <TouchableOpacity 
                onPress={()=>{AddUserInfo()
                setScene(true)
                }}
                style={styles.submit}>
                    <Text style={styles.submitText}>Kaydet</Text>
                </TouchableOpacity>

                </View>}
           { !isNew &&<View style={styles.card}>
            
            
            <Text style={styles.cardTitle}>Kullanıcı Bilgileri</Text>
            
            <View style={styles.changeble}>
                <View style={styles.cardIde}>
                <Text style={styles.cardQue}>Kullanıcı Adı</Text>
                </View>
                <Text>: </Text>
                {userLoading?<ActivityIndicator/>:<Text>{userName}</Text>}
                <AntDesign 
                style={styles.icon}
                name="edit" size={20} color="black" onPress={()=>setChangeName(!changeName)}/>
                
                
            </View>
            {changeName&&
            <Animatable.View
            duration={500}
            animation={changeName?'slideInRight':'slideOutUp'}
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:16,...styles.shadow}}>
                <TextInput
                style={styles.input}
                value={userName}
                onChangeText={(txt)=>setUserName(txt)}
                />
                <TouchableOpacity onPress={AddUserInfo} >
                <FontAwesome name="check-circle" size={24} color="black" />
                </TouchableOpacity>
                </Animatable.View>}

            <View style={styles.changeble}>
                <View style={styles.cardIde}>
                <Text style={styles.cardQue}>Kullanıcı Soyadı</Text>
                </View>
                <Text>: </Text>
                {userLoading?<ActivityIndicator/>:<Text>{userLastName}</Text>}
                <AntDesign 
                style={styles.icon}
                name="edit" size={20} color="black" onPress={()=>setChangeLastName(!changeLastName)}/>
                
            </View>
            {changeLastName&&
            <Animatable.View
            duration={500}
            animation={changeLastName?'slideInRight':'slideOutUp'}
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:16,...styles.shadow}}>
                <TextInput
                style={styles.input}
                value={userLastName}
                onChangeText={(txt)=>setUserLastName(txt)}
                />
                <TouchableOpacity onPress={AddUserInfo} >
                <FontAwesome name="check-circle" size={24} color="black" />
                </TouchableOpacity>
                </Animatable.View>}
          
            <View style={styles.changeble}>
            <View style={styles.cardIde}>
                <Text style={styles.cardQue}>İl</Text>
                </View>
                <Text>: </Text>
                {userLoading?<ActivityIndicator/>:<Text>{city}</Text>}
                <AntDesign 
                style={styles.icon}
                name="edit" size={20} color="black" onPress={()=>setChangeCity(!changeCity)}/>
                
            </View>
            {changeCity&&
            <Animatable.View
            duration={500}
            animation={changeCity?'slideInRight':'slideOutUp'}
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:16,...styles.shadow}}>
                <TextInput
                style={styles.input}
                value={city}
                onChangeText={(txt)=>setCity(txt)}
                />
                <TouchableOpacity onPress={AddUserInfo} >
                <FontAwesome name="check-circle" size={24} color="black" />
                </TouchableOpacity>
                </Animatable.View>}

            <View style={styles.changeble}>
            <View style={styles.cardIde}>
                <Text style={styles.cardQue}>İlçe</Text>
                </View>
                <Text>: </Text>
                {userLoading?<ActivityIndicator/>:<Text>{province}</Text>}
                <AntDesign 
                style={styles.icon}
                name="edit" size={20} color="black" onPress={()=>setChangeProvince(!changeProvince)}/>
                
            </View>
            {changeProvince&&
            <Animatable.View
            duration={500}
            animation={changeProvince?'slideInRight':'slideOutUp'}
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:16,...styles.shadow}}>
                <TextInput
                style={styles.input}
                value={province}
                onChangeText={(txt)=>setProvince(txt)}
                />
                <TouchableOpacity onPress={AddUserInfo} >
                <FontAwesome name="check-circle" size={24} color="black" />
                </TouchableOpacity>
                </Animatable.View>}

            <View style={styles.changeble}>
            
            <View style={styles.cardIde}>
                <Text style={styles.cardQue}>Telefon</Text>
                </View>
                <Text>: </Text>
                {userLoading?<ActivityIndicator/>:
                
                <Text>{userPhone}</Text>}
            
                <AntDesign 
                style={styles.icon}
                name="edit" size={20} color="black" onPress={()=>setChangePhone(!changePhone)}/>
                
            </View>
            {changePhone&&
            <Animatable.View
            duration={500}
            animation={changePhone?'slideInRight':'slideOutUp'}
            style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:16,...styles.shadow}}>
                <TextInput
                style={styles.input}
                value={userPhone}
                onChangeText={(txt)=>setUserPhone(txt)}
                />
                <TouchableOpacity onPress={AddUserInfo} >
                <FontAwesome name="check-circle" size={24} color="black" />
                </TouchableOpacity>
                </Animatable.View>}
          
            </View>}
            <View style={styles.line2}/>
            </ScrollView>
            
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems:'center',
        //backgroundColor:'#fff'
    },
    card:{
        width:'95%',
        backgroundColor:'white',
        marginTop:32,
        paddingHorizontal:8,
        paddingVertical:16,
        borderRadius:10,
        alignSelf:'center',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    cardTitle:{
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:8,
        fontSize:20,
        fontFamily:'Oswald_400Regular'
    },
    cardIde:{
        width:'40%',
        flexDirection:'row'
    },
    cardQue:{
        fontFamily:'Oswald_400Regular'
    },
    firstTouch:{
        marginTop:32,
        paddingLeft:16,
        paddingRight:8
    },
    subFirst:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    input:{
        padding:8,
        //marginHorizontal:16,
        width:'80%',
        marginVertical:16,
        elevation:5,
        borderRadius:15,
        backgroundColor:'white'
    },
    submit:{
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'blue'
    },
    submitText:{
        color:'blue',
        fontFamily:'Inter_400Regular'
    },
    button:{
        //backgroundColor:'white',
        //borderRadius:8,
        padding:8,
        width:'60%',
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row',
        //position:'absolute',
        alignSelf:'flex-end',
        //right:'45%',
        top:'4%',
        
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold'
    },
    header:{
        fontSize:24,
        fontWeight:'700',
        color:'blue'
    },
    changeble:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        //justifyContent:'space-between',
        alignItems:'center',
        marginVertical:8
    },icon:{
        
        opacity:0.4,
        alignSelf:'flex-end',
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
    line2:{
        borderBottomWidth:1,
        width:'85%',
        height:100,
        marginVertical:8,
        borderColor:'gainsboro',
        alignSelf:'center'
    }
})