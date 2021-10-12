export async function getEvents() {
  const response = await fetch(
    "https://nextjs-3a106-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
    const allEvents =await getEvents();
  return allEvents.filter((event) => event.isFeatured);
}
