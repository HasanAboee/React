import {getEvents} from '../helper/api-util'
import EventList from "../components/events/event-list";
function HomePage(props) {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps(){
  const FeaturedEvents = await getEvents();
  return{
    props:{
      events:FeaturedEvents
    }
  }
}
export default HomePage;
