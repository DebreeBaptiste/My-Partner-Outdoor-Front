import { axiosInstance } from './axiosInstance';
import { getSports } from '../store/reducers/sports';


// Récupération de la liste des sports
export const fetchSports = () => async (dispatch) => {
  const response = await axiosInstance.get('/sport');

  if (response.status === 200) {
    dispatch(getSports(response.data));
  }
};
