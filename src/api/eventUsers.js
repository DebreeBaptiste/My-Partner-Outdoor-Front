import { saveParticipants } from '../store/reducers/eventParticipant';
import { axiosInstance } from './axiosInstance';

// Récupération des participants a un événement
export const getEventUsers = (eventId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/event/${eventId}/users`);


    if (response.status === 200) {

      dispatch(saveParticipants(response.data));
    }

  } catch (error) {
    console.log(error);
  }

}
