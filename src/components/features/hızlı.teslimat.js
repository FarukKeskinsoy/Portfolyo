import React from 'react'
import { Text,View,StyleSheet} from 'react-native'

export const HızlıTeslimat=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>HIZLI TESLİMAT</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
        width:'20%',
        bottom:'1%'
    },
    text:{
        color:'white',
        letterSpacing:-1,
        fontWeight:'900',
        fontSize:10,
        textAlign:'center'
    }
})