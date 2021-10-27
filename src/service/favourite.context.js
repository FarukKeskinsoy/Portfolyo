import React, { createContext, useState,useEffect,useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "./authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const {user}=useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value,uid) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`@favouritesNew-${uid}`, jsonValue)
    } catch (e) {
      console.log("error storing",e);
    }
  }
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favouritesNew-${uid}`)
      if(value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch(e) {
      console.log("error loading",e)
    }
  }

  const add = (item) => {
    setFavourites([...favourites, item]);
  };

  const remove = (item) => {
    const newFavourites = favourites.filter(
      (x) => x.id !== item.id
    );

    setFavourites(newFavourites);
  };
  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  const isFavourite=favourites.find((s)=>s.id===item.id)
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        add,
        remove,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};