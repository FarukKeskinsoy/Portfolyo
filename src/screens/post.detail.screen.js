import React, { useState } from 'react'
import { StyleSheet, Text,View } from 'react-native'
import { Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const PostDetail=({route,navigation})=>{
    const {item}=route.params;
    return(
        <View style={styles.container}>
            <View style={{marginLeft:8,marginTop:16,marginBottom:8}}>
            <AntDesign name="back" size={24} 
            onPress={()=>navigation.goBack()}
            color="black" />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:8,marginTop:8}}>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Avatar.Image
                        source={{uri:item.UserPhoto}}
                        size={50}
                    />
                    <View style={{marginLeft:8}}>
                        <Text>{item.UserName}</Text>
                        <Text>{item.PostTime}</Text>
                    </View>
                   
                    </View>
                    
                    <Entypo name="dots-three-horizontal" 
                    onPress={()=>setShow(!show)}
                    size={24} color="black" />
                </View>
                <Text style={{margin:8,color:'grey'}}>{item.Post}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignSelf:'center',
        width:'95%',
        
    }
})