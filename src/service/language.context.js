import React,{createContext, useState} from 'react'
import { Türkçe,English } from '../components/data/language';

export const LanguageContext=createContext();

export const LanguageContextProvider=({children})=>{
    

    const [show,setShow]=useState(false)
    const [language,setLanguage]=useState(Türkçe)



    return(
        <LanguageContext.Provider
        value={{
            show,setShow,language,setLanguage,English,Türkçe
        }}
        >
            {children}
        </LanguageContext.Provider>
    );
}