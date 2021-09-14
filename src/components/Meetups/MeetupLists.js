import MeetupItems from './MeetupItems';
import classes from './MeetupList.module.css';
function MeetupList(props){
    return(
<ul className={classes.list}>
    {props.meetup.map((meetup ) => (<MeetupItems 
    key={meetup.id}
    id={meetup.id}
    image={meetup.image}
    address={meetup.address}
    description={meetup.description}
    title={meetup.title}
     />))}
</ul>
    );
}
export default MeetupList;