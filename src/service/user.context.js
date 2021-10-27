import React,{createContext, useContext, useState,useEffect} from 'react'
import firebase from 'firebase'
import { AuthenticationContext } from './authentication.context';
import { Share,Alert } from 'react-native'


export const UserContext=createContext();

export const UserContextProvider=({children})=>{
    const {user,onRegister}=useContext(AuthenticationContext)

    const [userLoading,setUserLoading]=useState(true)
    const [userMail,setUserMail]=useState("");
    const [userName,setUserName]=useState("");
    const [userLastName,setUserLastName]=useState("");
    const [userPhone,setUserPhone]=useState("");
    const [userPhoto,setUserPhoto]=useState("");
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [province,setProvince]=useState("");
    const [isNew,setIsNew]=useState(true);
    const [jsonLoading,setJsonLoading]=useState(true);
    const [userList,setUserList]=useState([])

    
    var key=firebase.firestore().collection('Users').doc().id

    const AddUserInfo=(addComplete)=>{
        
        key=user.uid
        var newUser={
            idForApp:Math.random().toString(36).substr(2,9),
            id:firebase.firestore().collection('Users').doc().id,
            User:user.email,
            Userid:user.uid,
            UserName:userName,
            UserLastName:userLastName,
            UserPhone:userPhone,
            City:city,
            Country:country,
            Province:province

        }
        firebase.firestore().collection('Users').doc(key).set(newUser).then(()=>Alert.alert('Yeap!','new informations updated!'))
    }
    const AddNewInfo=(addComplete)=>{
        key=user.uid
        var newUser={
            idForApp:Math.random().toString(36).substr(2,9),
            id:firebase.firestore().collection('Users').doc().id,
            User:user.email,
            Userid:user.uid,
            UserName:userName,
            UserLastName:userLastName,
            UserPhone:userPhone,

        }
        firebase.firestore().collection('Users').add(newUser)
    }

    const GetThisUser=()=>(
        useEffect(()=>{
            firebase.firestore().collection('Users').doc(user.uid).get().then((doc)=>{
                setUserMail(doc.data().User)
                setUserName(doc.data().UserName)
                setUserLastName(doc.data().UserLastName)
                setUserPhone(doc.data().UserPhone)
                setProvince(doc.data().Province)
                setCountry(doc.data().Country)
                setCity(doc.data().City)
               
            }).catch(e=>alert('couldnt get user info',e))
            .finally(()=>setUserLoading(false))
        },[])
    )

   const isNewUser=()=>
   useEffect(()=>{
    firebase.firestore().collection('Users').doc(user.uid).get().then((doc)=>{
      if(doc.data().UserName!==""){
        setIsNew(false)}
   })
   },[])

   const UserExam=async()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>{
      setUserList(json)
    } 
      
      ).catch(e=>alert('Yüklenemedi')).finally(()=>setJsonLoading(false))
   }
   
   
   
   
//arkadaşlarınla paylaş bölümü
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: 'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        };
  }
    return(
        <UserContext.Provider
        value={{
          //photo
         
          //get
            AddUserInfo,
            GetThisUser,
            userLoading,
            userMail,
            onShare,
            AddNewInfo,
            //user data
            setUserMail,
            userName,setUserName,
            userPhone,setUserPhone,
            userLastName,setUserLastName,
            city,setCity,
            country,setCountry,
            province,setProvince,
            isNewUser,isNew,jsonLoading,UserExam,userList
        }}
        >
            {children}
        </UserContext.Provider>
    );
}