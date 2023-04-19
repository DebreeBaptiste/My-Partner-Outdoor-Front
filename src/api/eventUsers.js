import { saveParticipants } from '../store/reducers/eventParticipants';
import { sendNotification } from '../store/reducers/notification';
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

export const eventUserSubscribe = (eventId) => async (dispatch) => {
  try {
    const response = await axiosInstance.post(`/event/${eventId}/user/${localStorage.getItem('userId')}`);

    if (response.status === 200) {
      dispatch(sendNotification("Vous participez à l'évênement"));
      dispatch(getEventUsers(eventId));
    }

  } catch (error) {
    console.log(error);
  }
}

export const eventUserUnsubscribe = (eventId) => async (dispatch) => {
  try {
    const response = await axiosInstance.delete(`/event/${eventId}/user/${localStorage.getItem('userId')}`);

    if (response.status === 200) {
      dispatch(sendNotification("Vous ne participez plus à l'évênement"));
      dispatch(getEventUsers(eventId));
    }

  } catch (error) {
    console.log(error);
  }
}
