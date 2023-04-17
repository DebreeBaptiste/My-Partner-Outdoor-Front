
import { saveMessages } from '../store/reducers/messages';
import { axiosInstance } from './axiosInstance';

// Récupération des participants a un événement
export const getEventMessages = (eventId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/event/${eventId}/messages`);


    if (response.status === 200) {
      dispatch(saveMessages(response.data));
    }

  } catch (error) {
    console.log(error);
  }

}

export const postNewMessage = (eventId) => async (dispatch, getState) => {

  const user_id = JSON.parse(localStorage.getItem('userId'));
  const content = getState().messages.newMessage;
  try {

    await axiosInstance.post(`/event/${eventId}/message`, { content, user_id });

  } catch (error) {
    console.log(error);
  }
}
