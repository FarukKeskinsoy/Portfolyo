import React, { createContext,useState} from 'react'
import firebase from 'firebase';
import { Alert } from 'react-native';

export const AuthenticationContext=createContext();

export const AuthenticationContextProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(false);
    const [user,setUser]=useState(false);
    const [error,setError]=useState(false);

    const loginRequest=(email,password)=>
        firebase.auth().signInWithEmailAndPassword(email,password)

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
          setUser(usr);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });

      const onLogin=(email,password)=>{
        setIsLoading(true);
        loginRequest(email,password).then((u)=>{
            setUser(u)
            setIsLoading(false)
        }).catch((e)=>{
            setIsLoading(false);
            setError(e.toString())
            alert('Parola veya Email hatalı',e)
        })
      }

      const onRegister=(email,password,repeatedPassword)=>{
          setIsLoading(true);
          if(password!==repeatedPassword){
              Alert.alert('Error','passwords do not match')
          }
          firebase
          .auth()
          .createUserWithEmailAndPassword(email,password)
          .then((u)=>{
              setUser(u);
              setIsLoading(false)
          })
          .catch((e)=>{
              Alert.alert('Kayıt Hatası','Kayıt Olamadınız Tekrar Deneyiniz')
          })
      }

      const onLogout=()=>{
          setUser("");
          firebase.auth().signOut();
      }
    return(
        <AuthenticationContext.Provider
        value={{
            isAuthenticated:!!user,
            user,
            error,
            isLoading,
            onLogin,
            onRegister,
            onLogout
        }}>
            {children}
        </AuthenticationContext.Provider>
    );
}