import React, { useState } from 'react'
import { Image,Text,View,StyleSheet,TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Avatar } from 'react-native-paper'
import { photos } from '../data/photos'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export const SocialListComponent=({item,navigation})=>{
    const [color,setColor]=useState(false)
    const [show,setShow]=useState(false)
    const [likes,setLikes]=useState(item.likes)
    const [showComments,setShowComments]=useState(false)

    return(
         
        <View style={{width:'100%',marginVertical:8}}>
            <View style={styles.postContainer}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:8,marginTop:8}}>
                    <TouchableOpacity onPress={
                ()=>navigation.navigate('Post Detail',{item:item})}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Avatar.Image
                        source={{uri:item.UserPhoto}}
                        size={50}
                    />
                    <View style={{marginLeft:8}}>
                        <Text style={{fontFamily:'Lato_400Regular',color:'black',fontSize:16}}>{item.UserName}</Text>
                        <Text style={{fontFamily:'Lato_400Regular',color:'grey',fontSize:12}}>{item.PostTime}</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>setShow(!show)}
                    style={{alignItems:'center',justifyContent:'center',paddingHorizontal:5,paddingVertical:2}}>
                    <Entypo name="dots-three-horizontal" 
                    size={24} color="black" />
                    </TouchableOpacity>
                    {show&&<TouchableOpacity 
                    onPress={()=>{
                        setShow(false),
                        Alert.alert('Tamamdır','Buluşma isteği ve mesajınız başarıyla gönderildi')
                    }}
                    style={styles.box}><Text style={styles.boxText}>Ben de gelicem</Text></TouchableOpacity>}
                </View>
                <Text style={{margin:8,color:'grey',fontFamily:'Roboto_400Regular_Italic'}}>{item.Post}</Text>
            <Image
            style={{resizeMode:'cover',width:'100%',alignSelf:'center',height:200,}}
            source={{uri:item.PostImage}}
            //source={{uri:photos[Math.floor(Math.random() * 4)]}}
            />
            
                <View style={{ flexDirection:'row',
                             alignItems:'center',margin:8}}>
                            <AntDesign name={color?"heart":"hearto"} size={24} 
                                color={color?"red":"black"} 
                                style={{marginRight:8}}
                                onPress={()=>{setColor(!color)
                                

                                }} />
                            <EvilIcons name="comment" 
                                style={{marginRight:8}}
                                size={35} color="black"
                                onPress={()=>setShowComments(!showComments)}
                                />
                            <Feather name="send" size={24} color="black" />
                </View>
            <Text style={styles.likes}>{color?item.likes+1:item.likes} beğeni</Text>
            
            
         
            </View>
            {showComments&&
            
            <TextInput
            style={styles.input}
            right={<TextInput.Icon name="share" 
            onPress={()=>{
                setShowComments(false);
                alert('Yorumunuz paylaşıldı')
            }}
            size={24} color="black" />}
            
            />}
        </View>

        
    )
}

const styles=StyleSheet.create({
    postContainer:{
        borderTopWidth:0.3,
        borderRightWidth:0.3,
        borderRadius:4,
        borderLeftWidth:0.3,
        borderBottomWidth:0,
        borderColor:'gainsboro',
        backgroundColor:'#f0f0f0',
        alignSelf:'center',
        //padding:16,
        width:'80%',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
        
    },
    box:{
        width:90,
        height:50,
        padding:8,
        position:'absolute',
        borderWidth:0.3,
        borderColor:'gainsboro',
        borderRadius:5,
        backgroundColor:'#fff',
        left:'60%',
        top:'65%',
        justifyContent:'center',alignItems:'center'
        
    },
    boxText:{
        fontSize:12,
        fontFamily:'Lato_400Regular',
        letterSpacing:-0.5
    },
    likes:{
        marginLeft:8,marginBottom:4,fontFamily:'Lato_400Regular'
    },
    postContainerSub:{
        borderTopWidth:0,
        borderRightWidth:0.3,
        borderLeftWidth:0.3,
        borderBottomWidth:0.3,
        borderColor:'gainsboro',
        backgroundColor:'#f0f0f0',
        alignSelf:'center',
        padding:16,
        width:'80%',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
       
    },
    shadow:{
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    input:{
        width:'80%',
        padding:4,
        backgroundColor:'white',
        borderRadius:10,shadowColor:'black',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
        alignSelf:'center'

    }
})