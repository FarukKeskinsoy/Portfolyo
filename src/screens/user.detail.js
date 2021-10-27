import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export const UserDetail=({route,navigation})=>{
    const {item}=route.params;
    return(
        <View style={styles.container}>
            <View style={{marginLeft:8,marginTop:16}}>
            <AntDesign name="back" size={24} 
            onPress={()=>navigation.goBack()}
            color="black" />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>Kullanıcı Adı :</Text>
                <Text style={styles.infoText}>{item.username}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>İsim Soyisim :</Text>
                <Text style={styles.infoText}>{item.name}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>Email :</Text>
                <Text style={styles.infoText}>{item.email}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>Adres :</Text>
                <Text style={styles.infoText}>{item.address.city} ,{item.address.street}, {item.address.zipcode}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>Telefon :</Text>
                <Text style={styles.infoText}>{item.phone}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>İnternet Sitesi :</Text>
                <Text style={styles.infoText}>{item.website}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.infoTitle}>İşyeri :</Text>
                <Text style={styles.infoText}>{item.company.bs}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,

    },subContainer:{
        marginHorizontal:8,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },infoTitle:{
        fontFamily:'Oswald_400Regular'
    },infoText:{
        fontFamily:'Roboto_300Light_Italic'
    }
})