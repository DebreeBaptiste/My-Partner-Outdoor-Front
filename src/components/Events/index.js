//  Import
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRandomEvents } from '../../api/event';

// == Import
import './styles.scss';
import Event from './Event/index.js';

// == Composant
function Events() {
const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchRandomEvents());
  }, []);


  
  const events = useSelector((state) => state.event.event);
  

  return (
    <main className='events'>
     {events.map(event => (<Event {...event} key={event.id} />))}
      
  
    </main>

  );
}

// == Export
export default Events;

