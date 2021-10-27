import React, { useContext } from 'react'
import { Text,View,FlatList, ActivityIndicator,Image} from 'react-native'
import { Posts } from '../components/data/Posts'
import { ProductListComponent } from '../components/Posts/product.post.card'
import { PostContext } from '../service/post.context'
import { AntDesign } from '@expo/vector-icons';

export const ProductScreen=({item,navigation})=>{

    const {GetProducts,productLoading,products}=useContext(PostContext)
    GetProducts()
    return(
        <View>
            <View style={{marginLeft:8,marginTop:16}}>
            <AntDesign name="back" size={24} 
            onPress={()=>navigation.goBack()}
            color="black" />
            </View>
            {productLoading?<ActivityIndicator/>:
            <FlatList
            
            data={products}
            renderItem={({item}) => <ProductListComponent item={item} navigation={navigation}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
             />
            }
        </View>
    )
}