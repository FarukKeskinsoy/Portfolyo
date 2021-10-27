import React from 'react'
import { Image, ImageBackground, StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import { Avatar } from 'react-native-paper'
import { photos } from '../data/photos'
import { BestSeller } from '../features/best.seller.component'
import { FavouriteComponent } from '../features/favourite.component'
import { HızlıTeslimat } from '../features/hızlı.teslimat'
import { RatingStars } from '../features/stars.component'

export const ProductListComponent=({item,navigation})=>{
    return(
        <View>
        <View style={styles.productContainer}>
            
            <ImageBackground
            style={{width:'100%',
            height:200,
            resizeMode:'contain'}}
            source={{uri:item.image}}
            >
            <FavouriteComponent/>
            {item.cargo&&<HızlıTeslimat/>}
            {item.bestSeller&&<BestSeller/>}
            </ImageBackground>
            <View style={styles.price}>
            <Text style={styles.productSaler}>{item.saler}</Text>
            <Text style={styles.productName}>{item.ProductName}</Text>
            </View>
            <RatingStars/>
            <View style={styles.price}>
            <Text>{item.Price}</Text>
            <Text>{item.currency}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sepete Ekle</Text>
            </TouchableOpacity>
            
        </View>
        </View>
         


        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },productContainer:{
        width:'95%',
        marginVertical:16,
        padding:4,
        backgroundColor:'white',
        borderWidth:0.5,
        borderColor:'#f5ad1b',
        alignSelf:'center',
        borderRadius:4
        
    },price:{
        flexDirection:'row',
        marginTop:8,
        marginLeft:8,
    },productName:{
        fontFamily:'Roboto_400Regular_Italic'
    },
    productSaler:{
        fontFamily:'Roboto_700Bold',
        marginRight:4
    },
    button:{
        padding:8,
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.8,
        borderColor:'#f5ad1b',
        alignSelf:'center',
        marginVertical:8,
        borderRadius:8
    },buttonText:{
        color:'#f5ad1b',
        fontSize:20
    }
})