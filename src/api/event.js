import { getRandomEvents } from '../store/reducers/event';
import { saveSearch} from '../store/reducers/searchEvent';
import { axiosInstance } from './axiosInstance';

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
export const postEvent = () => async (getState) => {
  
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
 
};