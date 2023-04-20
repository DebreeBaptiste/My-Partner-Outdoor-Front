import { getRandomEvents } from '../store/reducers/event';
import { getEventsWithID } from '../store/reducers/myEvent';
import { axiosInstance } from './axiosInstance';
import { resetFormField } from '../store/reducers/createEvent';
import { closeEventEdit, closeEventPictureEdit, saveEvent, saveEventPicture, updateEventPictureDate } from '../store/reducers/eventDetails';
import { sendNotification } from '../store/reducers/notification';
import { closeModal } from '../store/reducers/modalDelete';

// Récupération des événements aléatoires
export const fetchRandomEvents = () => async (dispatch) => {
  const response = await axiosInstance.get('/event/random');

  dispatch(getRandomEvents(response.data));
};

// Récupération des événements en fonction de la recherche
export const fetchSearchEvents = async (search, dept, dispatch) => {
  try {
    const response = await axiosInstance.get(`/event/s?search=${search}&dept=${dept}`);

    dispatch(getRandomEvents(response.data));
  } catch (error) {
    console.log(error);
  }

};

export const fetchMyEvents = () => async (dispatch) => {
  const organizer_id = JSON.parse(localStorage.getItem('userId'));

  try {
    const response = await axiosInstance.get(`user/${organizer_id}/events`);

    dispatch(getEventsWithID(response.data));
  } catch (error) {
    console.log(error);
  }

};

// Création d'un événement
export const postEvent = (navigate) => async (dispatch, getState) => {

  const state = getState();

  const { title, description, start_date, finish_date, start_hour, finish_hour, nb_participant, organizer_id, equipement, price, picture, number, street, zip_code, city, sport, level } = state.createEvent.createEvent;

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
      navigate(`/event/${response.data.id}/about`);
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

// Modification d'un événement
export const editEvent = (eventId) => async (dispatch, getState) => {

  const state = getState();
  const { title, description, start_date, finish_date, start_hour, finish_hour, nb_participant, equipement, price, picture, organizer_id, number, street, zip_code, city, sport, level } = state.eventDetails.event;


  try {
    const response = await axiosInstance.patch(`/event/${eventId}`, {
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


    if (response.status === 200) {
      console.log(response.data);
      dispatch(saveEvent(response.data));
      window.scrollTo({ top: 0 })
      dispatch(closeEventEdit());
      dispatch(sendNotification("L'événement a bien été modifié !"));
    }
  } catch (error) {
    console.log(error);
  }

}

// Suppression d'un événement
export const deleteEvent = (navigate) => async (dispatch, getState) => {
  const state = getState();
  const eventId = state.eventDetails.event.id;
  try {
    const response = await axiosInstance.delete(`/event/${eventId}`);

    if (response.status === 200) {
      dispatch(closeModal());
      dispatch(closeEventEdit());
      navigate('/home');
      window.scrollTo({ top: 0 })
      dispatch(sendNotification("L'événement a bien été supprimé !"));
    }
  } catch (error) {
    console.log(error);
  }

}

