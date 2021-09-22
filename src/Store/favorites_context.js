import { createContext } from "react";
import { useState } from "react";
const FavoritesContext=createContext({
    favorites:[],
    totalfavorites:0,
    addfavorite:(favoritemeetup) => {},
    removefavorite:(meetupId) => {},
    itemIsfavorite:(meetupId) => {},
});
export function FavoritesContextProviders(props){
    const [userFavorites,setUserFavorites]=useState([]);
    
    
    function addFavoriteHandler(favoritemeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritemeetup);
        });
    }
    
    function removeFavoriteHandler(meetupId){ 
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    
    const context={
        favorites:userFavorites,
        totalfavorites:userFavorites.length,
        addfavorite: addFavoriteHandler,
        removefavorite: removeFavoriteHandler,
        itemIsfavorite:itemIsFavoriteHandler
    };
    
    
    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesContext;