
import { addNewMessage, saveMessages } from '../store/reducers/messages';
import { axiosInstance } from './axiosInstance';

// Récupération des participants a un événement
export const getEventMessages = (eventId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/event/${eventId}/messages`);


    if (response.status === 200) {

      dispatch(saveMessages(response.data));
    }

  } catch (error) {
    dispatch(saveMessages([]));
  }

}

export const postNewMessage = (eventId) => async (dispatch, getState) => {

  const user_id = JSON.parse(localStorage.getItem('userId'));
  const content = getState().messages.newMessage;
  try {

    const response = await axiosInstance.post(`/event/${eventId}/message`, { content, user_id });


    dispatch(addNewMessage(response.data));
    dispatch(getEventMessages(eventId));
  } catch (error) {
    console.log(error);
  }
}

export const deleteMessage = (eventId, messageId) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/event/${eventId}/message/${messageId}`);

    dispatch(getEventMessages(eventId));
  } catch (error) {
    console.log(error);
  }
}
