import { getRandomEvents } from '../store/reducers/event';
import { axiosInstance } from './axiosInstance';

import { resetFormField } from '../store/reducers/createEvent';

// Récupération des événements aléatoires
export const fetchRandomEvents = () => async (dispatch) => {
  const response = await axiosInstance.get('/event/random');

  dispatch(getRandomEvents(response.data));
};

// Récupération des événements en fonction de la recherche
export const fetchSearchEvents = async (search, dept, dispatch) => {
  try {
    const response = await axiosInstance.get(`/event/s?search=${search}&dept=${dept}`);
    console.log(response.data);
    dispatch(getRandomEvents(response.data));
  } catch (error) {
    console.log(error);
  }

};

// Création d'un événement
export const postEvent = (navigate) => async (dispatch, getState) => {

  const state = getState();
  console.log(state);
  const { title, description, start_date, finish_date, start_hour, finish_hour, nb_participant, equipement, price, picture, organizer_id, number, street, zip_code, city, sport, level } = state.createEvent.createEvent;
  try {
    const response = await axiosInstance.post('/event', {
      title,
      description,
      start_date,
      finish_date,
      start_hour,
      finish_hour,
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
    });
    console.log(response);
    if (response.status === 200) {
      dispatch(resetFormField())
      window.scrollTo({ top: 0 })
      navigate('/event/1');
    } else {

    }
  } catch (error) {
    console.log(error);
  }

};

