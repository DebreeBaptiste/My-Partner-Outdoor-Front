import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import Event from '../Events/Event';
import { fetchMyEvents } from '../../api/event';

function Myevents() {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("upcoming");
  const myEvents = useSelector((state) => state.myEvent.myEvent);
  console.log(myEvents);

  useEffect(() => {
    dispatch(fetchMyEvents());
  }, []);

  const handleUpcomingClick = () => {  
    setActiveButton('upcoming');
  }; 

  const handlePastClick = () => {  
    setActiveButton('past');
  }; 




  const currentdate = new Date();

  const upcomingEvents = myEvents.filter(event => {
    const eventDate = new Date(event.start_date.split("/").reverse().join("-"));
    console.log(eventDate);
    return eventDate >= currentdate;
    
  });

  console.log(upcomingEvents);

  const pastEvents = myEvents.filter(event => {
    const eventDate = new Date(event.start_date.split("/").reverse().join("-"));
    return eventDate < currentdate;
  });

  const eventsToShow = activeButton === "upcoming" ? upcomingEvents : pastEvents;
  console.log(eventsToShow);

  return (
    <>
      <div className="myevents__tabs">
        <button onClick={handlePastClick} className={activeButton === 'past' ? 'active' : 'myevents__tabs__button__past'} href="#">Passé</button>
        <button onClick={handleUpcomingClick} className={activeButton === 'upcoming' ? 'active' : 'myevents__tabs__button__upcoming'} href="#" >À venir</button>
      </div>
      <div className='myevents'>
        {eventsToShow.map(event => (
          <Event {...event} key={event.id} />
        ))}
      </div>
    </>
  );
}

export default Myevents;

