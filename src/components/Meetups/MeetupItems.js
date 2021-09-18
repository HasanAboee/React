import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../Store/favorites_context';
function MeetupItems(props){

    const favoriteCTX =useContext(FavoritesContext);
        


        const itemIsFavorites=favoriteCTX.itemIsfavorite(props.id);
    function ToggleFavoriteStatusHandler(props){
        if (itemIsFavorites){
            favoriteCTX.removefavorite(props.id)
        } else{
            favoriteCTX.addfavorite({
                id:props.id,
                image:props.image,
                title:props.title,
                description:props.description,
                address:props.address,
                });
        }

    }
    return (
       <li className={classes.item}>
           <Card>
           <div className={classes.image}>
           <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={ToggleFavoriteStatusHandler}>
                    {itemIsFavorites ? 'Remove from favorite' :'To favorite'}</button>
            </div>
            </Card>
       </li>


    );
}
export default MeetupItems;