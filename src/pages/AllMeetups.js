import { useState,useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupLists";

function AllMeetups(){
  const [isLoading , setIsLoading]=useState(true);
  const [LoadedMeetup,setLoadedMeetup]=useState([]);
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://react-36b5d-default-rtdb.firebaseio.com/meetup.json')
    .then(response => {
      return response.json();
    }).then(data =>{
      const meetups=[];

      
      for(const key in data)
      {
        const meetup={
        id:key,
        ...data[key]
      };
      meetups.push(meetup);
    }
      setIsLoading(false);
      setLoadedMeetup(meetups);
    });
  },[]);
 
  if (isLoading)
  {return (
  <section>
    <p>Loading...</p>
  </section>
  );
}
    return (
        <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={LoadedMeetup}/>
        </section>
    );
}
export default AllMeetups;