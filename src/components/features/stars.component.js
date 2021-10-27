import React from 'react'
import { Text,View,Image, TouchableOpacity } from 'react-native'

export const RatingStars=()=>{
    return(
        <View style={{flexDirection:'row',marginLeft:8,alignItems:'center'}}>
            <Image 
            style={{width:25,height:25}}
            source={require('../../../assets/freePic/stars/tamYıldız.png')}/>
            <Image 
            style={{width:25,height:25}}
            source={require('../../../assets/freePic/stars/tamYıldız.png')}/>
            <Image 
            style={{width:25,height:25}}
            source={require('../../../assets/freePic/stars/tamYıldız.png')}/>
            <Image 
            style={{width:25,height:25}}
            source={require('../../../assets/freePic/stars/tamYıldız.png')}/>
            <Image 
            style={{width:25,height:25}}
            source={require('../../../assets/freePic/stars/tamYıldız.png')}/>
            <TouchableOpacity><Text style={{color:'grey',fontSize:12}}>(215)</Text></TouchableOpacity>
        </View>
    )
}