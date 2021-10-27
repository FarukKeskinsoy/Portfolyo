import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/navigation';
import { AuthenticationContextProvider } from './src/service/authentication.context';
import firebase from 'firebase';
import { UserContextProvider } from './src/service/user.context';
import { useFonts, Inter_900Black,Inter_400Regular } from '@expo-google-fonts/inter';
import {
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import { LanguageContextProvider } from './src/service/language.context';
import { PostContextProvider } from './src/service/post.context';

const firebaseConfig = {
  apiKey: "xxxxxxxx",
  authDomain: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxxx"
};
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,Inter_400Regular,Oswald_400Regular,Lato_400Regular,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <AuthenticationContextProvider>
      <PostContextProvider>
      <UserContextProvider>
        <LanguageContextProvider>
          <Navigation/>
        </LanguageContextProvider>
      </UserContextProvider>
      </PostContextProvider>
    </AuthenticationContextProvider>
  );
}
}

