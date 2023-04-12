//  Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRandomEvents } from '../../api/event';

// == Import
import './styles.scss';
import Event from './Event/index.js';
import { MagnifyingGlass } from 'react-loader-spinner'
// == Composant
function Events() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchRandomEvents());
  }, []);

  const loading = useSelector((state) => state.event.loading);

  const events = useSelector((state) => state.event.event);
  const selectedLevel = useSelector((state) => state.event.selectedLevel); // Récupérer la valeur sélectionnée dans le state global


  const filteredEvents = events.filter((event) => {
    if (selectedLevel === "") { // Si aucun niveau n'est sélectionné, afficher tous les événements
      return true;
    } else {
      return event.level === selectedLevel; // Filtrer les événements en fonction du niveau sélectionné
    }
  });

  if (loading) {
    return (
      <div className='loading-container'>
        <MagnifyingGlass
          visible={loading}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='#c0efff'
          color='#8662c7'
        />;
      </div>)
  }
  return (
    <main className='events'>
      {filteredEvents.map(event => (<Event {...event} key={event.id} />))}


    </main>

  );
}

// == Export
export default Events;

