//  Import
import { useState, useEffect } from 'react';


// == Import
import './styles.scss';
import Event from './Event/index.js';

// == Composant
function Events() {

  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetch("http://localhost:4000/event/random")
    .then((response) => response.json())
    .then((data) => setEvents(data || []))
    .catch((err) => console.log(err));
};

  useEffect(() => {
    console.log('ma variable est modfiée');
    fetchEvents();
  }, []);

  return (
    <main className='events'>
     {events.map(event => (<Event {...event} key={event.id} />))}
      
  
    </main>

  );
}

// == Export
export default Events;

