import React from 'react'
import { StyleSheet, Text,View } from 'react-native'

export const BestSeller=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Çok Satan
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#f5ad1b',
        alignItems:'center',
        justifyContent:'center',
        transform:[{ rotate: "-35deg" }],
        top:'35%',
        position:'absolute'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        letterSpacing:-1
    }
})