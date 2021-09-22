import {Link} from 'react-router-dom';
import classes from './navigation.module.css';
import {useContext} from 'react';
import FavoritesContext from '../../Store/favorites_context';
function Navigation(){
    const favoriteCTX=useContext(FavoritesContext);
    return(
        <header className={classes.header}>
        <div className={classes.logo}>
            React Meetups
        </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/newmeetup'>Add New Meetup</Link>
                    </li>
                    <li >
                        <Link to='/favorites' >
                            Favorite Meetup
                            <span className={classes.badge}>{favoriteCTX.totalfavorites}</span>
                            </Link>
                    </li>
                </ul>
            </nav>
    </header>
    );
}
    
    
            

export default Navigation;