import { getRandomEvents, saveEvent } from '../store/reducers/event';
import { axiosInstance } from './axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const fetchRandomEvents = () => async (dispatch) => {
  const response = await axiosInstance.get('/event/random');
  // Les données retourner par l'API sont stockées dans la propriété data
  dispatch(getRandomEvents(response.data));
};


export const postEvent = () => async (dispatch, getState) => {
  
  
  const state = getState();
    console.log(state);
    const { title, description, start, finish, nb_participant, equipement, price, picture, organizer_id, number, street, zip_code, city, sport, level } = state.event.event;
try {
  const response = await axiosInstance.post('/event', {
    title : title,
    description,
    start,
    finish,
    nb_participant,
    equipement,
    price,
    picture,
    organizer_id,
    number,
    street,
    zip_code,
    city,
    sport,
    level,
  } );
  console.log(response);
} catch (error) {
  console.log(error);
}
   
  // dispatch(saveEvent(response.data));
  
 
};