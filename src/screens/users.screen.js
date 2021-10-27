import React, { useContext } from 'react'
import { Text,View,FlatList, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { UserAllList, UserHorizantalList } from '../components/Posts/user.list.card'
import { UserContext } from '../service/user.context'
import { AntDesign } from '@expo/vector-icons';

export const UsersScreen=({navigation})=>{

    const {jsonLoading,UserExam,userList}=useContext(UserContext)

    UserExam();
    
    return(
        <View>
            <View style={{marginLeft:8,marginTop:16}}>
            <AntDesign name="back" size={24} 
            onPress={()=>navigation.goBack()}
            color="black" />
            </View>
            {jsonLoading?<ActivityIndicator/>:
                <ScrollView>
                
                <FlatList
                data={userList}
                keyExtractor={item=>item.id.toString()}
                renderItem={({item}) => <UserAllList item={item} navigation={navigation}/>}
                showsVerticalScrollIndicator={false}
                />
                <View style={styles.line}/>
                <FlatList
                horizontal={true}
                data={userList}
                keyExtractor={item=>item.id.toString()}
                renderItem={({item}) => <UserHorizantalList item={item} navigation={navigation}/>}
                showsVerticalScrollIndicator={false}
                />
                <View style={styles.line2}/>
                </ScrollView>}
        </View>

)
}

const styles=StyleSheet.create({
    line:{
        borderBottomWidth:1,
        width:'85%',
        marginVertical:8,
        borderColor:'gainsboro',
        alignSelf:'center'
    },
    line2:{
        borderBottomWidth:1,
        width:'85%',
        height:100,
        marginVertical:8,
        borderColor:'gainsboro',
        alignSelf:'center'
    }
})