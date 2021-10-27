import React,{useState} from 'react'
import { Text,View,StyleSheet, TouchableOpacity } from 'react-native'
import { colors, TxColors } from '../components/data/colors';
import { AntDesign } from '@expo/vector-icons';


export const CustomizeScreen=({navigation})=>{
    const[bgColors,setBgColors]=useState('white')
    const[txColors,setTxColors]=useState('black')
    const[fontSize,setFontSize]=useState(12)
    return(
        <View style={{flex:2,alignItems:'center',justifyContent:'center',backgroundColor:bgColors}}>
            
            <View style={styles.textContainer}>
            <Text style={{fontSize:fontSize,color:txColors,textAlign:'center',fontFamily:'Roboto_400Regular_Italic'}}>Değiştirilebilir Ekran ;</Text>
            <Text style={{fontSize:fontSize,color:txColors,textAlign:'center',fontFamily:'Roboto_400Regular_Italic'}}>
                
                Bu ekranda gördüğünüz yazının font büyüklüğünü ve rengini aşağıdaki butonlar yardımıyla değiştirebilirsiniz.
            </Text>
            </View>
            
            <View style={styles.buttonWrapper}>
            <View style={{flexDirection:'row',width:'100%'}}>
            <TouchableOpacity 
            onPress={()=>setBgColors(colors[Math.floor(Math.random() * 10)])}
            style={styles.button}>
                <Text style={styles.buttonText}>Arka Fonu Değiştir</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>setTxColors(TxColors[Math.floor(Math.random() * 6)])}
            style={styles.button}>
                <Text style={styles.buttonText}>Yazı Rengini Değiştir</Text>
            </TouchableOpacity>
            </View>
           
            <View style={{flexDirection:'row',width:'100%'}}>
            <TouchableOpacity 
            onPress={()=>setFontSize(fontSize+1)}
            style={styles.button}>
                <Text style={styles.buttonText}>Fon Boyutunu Artır</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>setFontSize(fontSize-1)}
            style={styles.button}>
                <Text style={styles.buttonText}>Fon Boyutunu Azalt</Text>
            </TouchableOpacity>
            </View>
            </View>
            
          
           
        </View>
    );}

    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#fff'
        },
        button:{
            marginHorizontal:8,
            width:'45%',
            marginBottom:8,
            padding:8,
            backgroundColor:'#ffb73d',
            height:40,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center'
            

        },
        buttonWrapper:{
            alignSelf:'center',
            borderTopWidth:2,
            width:'100%',
            flex:0.8,
            padding:8
            ,zIndex:5,backgroundColor:'white',
            alignItems:'center',
            justifyContent:'flex-start',
            marginTop:40
            
            
        },
        textContainer:{
            flex:1,
            margin:32,
            alignSelf:'center',
            justifyContent:'center'
        },buttonText:{
            color:'white',
            fontSize:12,
            fontFamily:'Oswald_400Regular'
        }
    
    
    })