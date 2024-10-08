import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import CardGroup from 'react-bootstrap/CardGroup';


function Events() {
    const [events, setEvents] = useState([]);

    const getRequest = () => {
      fetch("/api/events")
      .then((response) => response.json())
      .then(events => {
        setEvents(events); 
        console.log('Events fetched...', events);
        });
    }

    useEffect(() => {getRequest()}, []);

  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} time={event.eventtime}/>
            )}
    </CardGroup>
    </div>
  );
}

export default Events;