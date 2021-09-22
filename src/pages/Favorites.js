
import {useContext} from 'react';
import FavoritesContext from '../Store/favorites_context';
import MeetupList from '../components/Meetups/MeetupLists'

function FavoritePages(){
    
  





    const favoriteCTX=useContext(FavoritesContext);
    let content;
    if(favoriteCTX.totalfavorites===0){
        content=<p>You got no favorites yet, Start adding some?</p>
    }else{
        content= <MeetupList meetups={favoriteCTX.favorites }/>;
    }
    return (
    
    <section> 
    <h1>My favorites</h1>
    
    {content}    
    
    </section>
   
    )
}
export default FavoritePages;