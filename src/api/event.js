import { getRandomEvents } from '../store/reducers/event';
import { axiosInstance } from './axiosInstance';

import { resetFormField } from '../store/reducers/createEvent';
import { closeEventPictureEdit, saveEvent, saveEventPicture, updateEventPictureDate } from '../store/reducers/eventDetails';

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

// Récupération d'un événement en fonction de son id
export const getOneEvent = (eventId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/event/${eventId}`);

    dispatch(saveEvent(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }

}

// Modification de la photo de l'evevénement
export const editEventPicture = (picture) => async (dispatch, getState) => {

  const state = getState();
  const eventId = state.eventDetails.event.id;

  try {

    const { data, status } = await axiosInstance.patch(`/event/${eventId}/upload`, picture);

    if (status === 200) {

      dispatch(saveEventPicture(data.picture));
      dispatch(updateEventPictureDate(data.updated_at));
      dispatch(closeEventPictureEdit());
    }

  } catch (error) {
    console.log(error);
  }
}

