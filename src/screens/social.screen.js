import React, { useContext } from 'react'
import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, Text,View } from 'react-native'
import { SocialListComponent } from '../components/Posts/social.post.card'
import { PostContext } from '../service/post.context'
import { AntDesign } from '@expo/vector-icons';


export const SocialScreen=({navigation})=>{
    const {GetPosts,posts,postLoading}=useContext(PostContext);
    GetPosts();

    return(
        <View style={styles.container}>
            {postLoading?<ActivityIndicator/>:
            <ImageBackground
            source={require('../../assets/freePic/backround.png')}
            style={{width:'100%',height:'100%'}}
            >
            <View style={{marginLeft:8,marginTop:16}}>
            <AntDesign name="back" size={24} 
            onPress={()=>navigation.goBack()}
            color="black" />
            </View>
           
             <FlatList
            data={posts}
            renderItem={({item}) => <SocialListComponent item={item} navigation={navigation}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
            </ImageBackground>
        }
            
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },

})