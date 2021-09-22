export default function Handler(MeetupData){
    return fetch('https://react-36b5d-default-rtdb.firebaseio.com/favorite.json',{
        method: 'Post',
        body: JSON.stringify(MeetupData),
        headers: {
            'content-type':'application/json'
        }
    })
}