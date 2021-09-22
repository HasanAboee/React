export default function AddHandler(MeetupData){
    return fetch('https://react-36b5d-default-rtdb.firebaseio.com/meetup.json',{
        method: 'Post',
        body: JSON.stringify(MeetupData),
        headers: {
            'content-type':'application/json'
        }
    })
}