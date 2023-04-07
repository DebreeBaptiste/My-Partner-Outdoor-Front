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