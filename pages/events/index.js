import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import { Fragment } from "react";
function AllEvents() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath=`/events/${year}/${month}`

    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}
export default AllEvents;
