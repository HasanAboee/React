import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'
import {useRef} from 'react';
function NewMeetupForm(props){
const titleInputRef=useRef();
const imageInputRef=useRef();
const addressInputRef=useRef();
const descriptionInputRef=useRef();
    function SubmitHandler(e){
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const entereAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const MeetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: entereAddress,
            description: enteredDescription,
        };
       
        props.onAddMeetup(MeetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler} >
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                <button  type='submit'>Add Meetup</button>
                </div>
            </form>
        </Card>

    );
}
export default NewMeetupForm;