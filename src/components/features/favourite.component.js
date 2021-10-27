import React, { useState } from 'react'
import { StyleSheet,Text,View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export const FavouriteComponent=()=>{
    const [isFavourite,setIsFavourite]=useState(false)
    return(
        <View style={styles.container}>
            <AntDesign name={isFavourite?"heart":"hearto"} size={20} color={isFavourite?"#f5ad1b":"black"} 
            onPress={()=>setIsFavourite(!isFavourite)}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:30,height:30,borderRadius:15,backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        alignSelf:'flex-end',
        right:'2%',
        marginTop:4
    }
})