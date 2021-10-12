import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById } from "../../dummy-data";
function Event() {
  const router = useRouter();
  const eventid = router.query.eventId;
  const event = getEventById(eventid);

  if (!event) {
    return <Fragment><ErrorAlert><p>No Event Found</p></ErrorAlert></Fragment>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default Event;
