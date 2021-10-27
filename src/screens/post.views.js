import React ,{useContext, useState} from 'react'
import { Text,View,TouchableOpacity,useWindowDimensions, StyleSheet, Image, ImageBackground } from 'react-native'
import { TabView,SceneMap } from 'react-native-tab-view'
import { AntDesign } from '@expo/vector-icons';
import { LanguageContext } from '../service/language.context';



export const PostViews=({navigation})=>{
  const{language}=useContext(LanguageContext)
    const [selected,setSelected]=useState(false)
    const [selectedRight,setSelectedRight]=useState(false)

    return(
 
        <View style={styles.container}>
          
            
            <TouchableOpacity
            style={styles.buttonLeft}
            onPress={()=>navigation.navigate('PostViewSosyal')}>
              <ImageBackground
              source={require('../../assets/freePic/social.png')}
              style={{resizeMode:'cover',width:'100%',height:'100%'}}
              ><AntDesign name="back" 
              style={{position:'absolute',top:'4%'}}
              size={24} 
              onPress={()=>navigation.goBack()}
              color="black" />
                <View style={styles.buttonLeftInner}>
                <Text style={styles.text}>{language[12]}</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonRight}
            onPress={()=>navigation.navigate('PostViewProduct')}>
              <ImageBackground
              source={require('../../assets/freePic/product.png')}
              style={{resizeMode:'cover',width:'100%',height:'100%'}}
              >
                <View style={styles.buttonRightInner}>
                <Text style={styles.text}>{language[13]}</Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
        flexDirection:'row'
    },
      
    buttonLeft:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:0.5,
        backgroundColor:'grey'
    
    },
    buttonRight:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
    
    },
    buttonWrapper:{
        width:'95%',
        height:'50%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey',
        borderRadius:100
    },
    text:{
        color:'black',
        fontFamily:'Roboto_500Medium'
    },
    buttonRightInner:{
      alignSelf:'flex-start',
      paddingLeft:8,
      top:'50%',
      width:'70%',
      alignItems:'flex-start',
      height:60,
      backgroundColor:'rgba(255,255,255,0.5)',
      justifyContent:'center',
      borderTopRightRadius:30,
      borderBottomRightRadius:30,
    },
    buttonLeftInner:{
      alignSelf:'flex-end',
      paddingRight:8,
      top:'50%',
      width:'70%',
      height:60,
      alignItems:'flex-end',
      backgroundColor:'rgba(255,255,255,0.5)',
      justifyContent:'center',
      borderTopLeftRadius:30,
      borderBottomLeftRadius:30,
    }

})

              {/* <View style={styles.circle}>
  <View >
    <View style={styles.yin}></View>
  </View>
  {/* <View>
    <View style={styles.feher}></View>
  </View>
  <View >
    <View style={styles.yang}></View>
  </View>
  
  <View >
    <View style={styles.p_black}></View>
    <View style={styles.p_white}></View>
  </View>
  
  
</View> */}