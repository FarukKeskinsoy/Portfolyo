import React from 'react'
import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import { Avatar } from 'react-native-paper'
import { photos } from '../data/photos'

export const UserAllList=({item,navigation})=>{
    return(
        <TouchableOpacity onPress={
            ()=>navigation.navigate('User Detail',{item:item})}>
        <View style={styles.container}>
            <Avatar.Image
            source={{uri:"https://image.freepik.com/free-photo/new-normal-students-papercraft-cut-out-style_53876-126880.jpg"}}
            />
            <View style={styles.infoSection}>
            <Text>{item.username}</Text>
            <Text>{item.name}</Text>
            </View>
            
        </View>
        </TouchableOpacity>
       
    )
};

export const UserHorizantalList=({item,navigation})=>{
    return(
        <View style={styles.containerHori}>
            <TouchableOpacity
             onPress={
                ()=>navigation.navigate('User Detail',{item:item})}
            >
            <Avatar.Image
            source={{uri:"https://image.freepik.com/free-photo/women-toilet-restroom-wc-sign_53876-124175.jpg"}}
            />
            <View style={styles.infoSection}>
            <Text>{item.username}</Text>
            <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}



const styles=StyleSheet.create({
    container:{
        backgroundColor:'gainsboro',
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:10,
        width:'85%',
        alignSelf:'flex-start',
        marginVertical:8,
        marginLeft:16,
        flexDirection:'row',
        alignItems:'center'

    },
    containerHori:{
        backgroundColor:'gainsboro',
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:10,
        width:250,
        alignSelf:'flex-start',
        
        marginRight:8,
        flexDirection:'row',
        alignItems:'center'

    },
    infoSection:{
        marginLeft:8
    }
})