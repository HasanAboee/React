import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import { useHistory } from "react-router-dom"
import AddHandler from  '../api/AddHandler'

function NewMeetup(){
    const history= useHistory();

    const handleAddMeetup = async (data) =>{
        await AddHandler(data);
        history.replace('/')
    }
  
    return( 
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={AddHandler}/>
    </section>
    );
}
export default NewMeetup;