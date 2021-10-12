import EventItem from "./event-item";
import styles from './event-list.module.css'
function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          address={event.address}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
export default EventList;
