import { getRandomEvents } from '../store/reducers/event';
import { axiosInstance } from './axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const fetchRandomEvents = () => async (dispatch) => {
  const response = await axiosInstance.get('/event/random');
  // Les données retourner par l'API sont stockées dans la propriété data
  dispatch(getRandomEvents(response.data));
  console.log(response.data);
};

// export const fetchEvents = () => {
//     fetch("http://localhost:4000/event/random")
//     .then((response) => response.json())
//     .then((data) => setEvents(data || []))
//     .catch((err) => console.log(err));
// };

export const postEvent = () => async (dispatch, getState) => {
  const { state } = getState();
  const response = await axiosInstance.post('/event', {
  title: state.event.title,
  description: state.event.description,
  start: state.event.start,
  finish: state.event.finish,
  nb_participant: state.event.nb_participant,
  equipement: state.event.equipement,
  price: state.event.price,
  picture: state.event.picture,
  // organizer_id: state.event.organizer_id,
  // sport_id: state.event.
  // level_id: state.event
  // address_id: state.event
  number: state.event.number,
  street: state.event.street,
  zip_code: state.event.zip_code,
  city: state.event.city,
  pseudo: state.event.pseudo,
  sport: state.event.sport,
  level: state.event.level,
  } 
  );
  console.log(response.data);
}

// dispatch(postEvent(response.data));