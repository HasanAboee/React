import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import { useHistory } from "react-router-dom"
function NewMeetup(){
    const history= useHistory();
    function AddHandler(MeetupData){
        fetch('https://react-36b5d-default-rtdb.firebaseio.com/meetup.json',{
            method: 'Post',
            body: JSON.stringify(MeetupData),
            headers: {
                'content-type':'application/json'
            }
        }).then(()=>
        {history.replace('/')}
        );
    }
    return( 
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={AddHandler}/>
    </section>
    );
}
export default NewMeetup;