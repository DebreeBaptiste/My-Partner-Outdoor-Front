import { axiosInstance } from './axiosInstance';
import { getSports } from '../store/reducers/sports';



// Récupération des événements aléatoires
export const fetchSports = () => async (dispatch) => {
  const response = await axiosInstance.get('/sport');
  console.log(response);
  dispatch(getSports(response.data));
};
