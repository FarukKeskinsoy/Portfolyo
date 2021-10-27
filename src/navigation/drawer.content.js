import React, { useContext } from 'react'
import { StyleSheet,TouchableOpacity,View } from 'react-native'
import {
    DrawerContentScrollView,DrawerItem
} from "@react-navigation/drawer"

import { Title,Text,Paragraph,Drawer,Caption,TouchableRipple,Switch, Avatar } from 'react-native-paper'
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { AuthenticationContext } from '../service/authentication.context';
import { LanguageContext } from '../service/language.context';

export const DrawerContent=(props)=>{
    const {onLogout}=useContext(AuthenticationContext)
    const {show,setShow,
        language,setLanguage,English,Türkçe
    }=useContext(LanguageContext)

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userInfoSection2}>
                            <Avatar.Image
                            source={{uri:"https://randomuser.me/api/portraits/lego/2.jpg"}}
                            size={50}
                            />
                        
                        <View style={{marginLeft:15}}>
                            <Title>Faruk Keskinsoy</Title>
                            <Caption style={styles.caption}>@faruk.io</Caption>
                        </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>80</Paragraph>
                                <Caption style={styles.caption}>{language[3]}</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>120</Paragraph>
                                <Caption style={styles.caption}>{language[4]}</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={()=><AntDesign name="home" size={24} color="black" />}
                        label={language[0]}
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={()=><Entypo name="user" size={24} color="black" />}
                        label={language[1]}
                        onPress={() => {props.navigation.navigate('Settings')}}
                    />
                    <DrawerItem
                        icon={()=><Ionicons name="language" size={24} color="black" />}
                        label={language[2]}
                        onPress={()=>setShow(!show)}
                    />
                    {show&&<Animatable.View
                    animation='bounceInLeft'
                    style={{marginLeft:75}}
                    >
                    <TouchableOpacity
                    style={styles.language}
                    onPress={()=>setLanguage(Türkçe)}
                    >
                     <Avatar.Image
                            style={styles.flag}
                            source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png"}}
                            size={30}
                            />
                    <Caption style={styles.caption}>Türkçe</Caption>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>setLanguage(English)}
                    style={styles.language}>
                     <Avatar.Image
                            style={styles.flag}
                            source={{uri:"https://w1.pngwing.com/pngs/996/629/png-transparent-union-jack-england-flag-of-england-flag-of-great-britain-flag-of-wiltshire-flag-of-british-columbia-flag-of-canada-flags-of-the-world-thumbnail.png"}}
                            size={30}
                            />
                        <Caption style={styles.caption}>English</Caption>
                    </TouchableOpacity>
                    </Animatable.View>}
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={()=><SimpleLineIcons name="logout" size={24} color="black" />}
                label={language[5]}
                onPress={onLogout}
                />
            </Drawer.Section>
        </View>
    )
}

const styles=StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20
    },
    userInfoSection2:{
        flexDirection:'row',
        marginTop:15
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },
    language:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8
    },
    flag:{
        marginRight:8
    }
});