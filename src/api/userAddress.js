import { sendNotification } from '../store/reducers/notification';
import { closeProfilEdit, saveUserAddress } from '../store/reducers/userDetails';
import { saveOtherUserAddress } from '../store/reducers/userProfil';
import { axiosInstance } from './axiosInstance';


/* User logged */
export const getUserAddress = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))

  try {

    const { data, status } = await axiosInstance.get(`/user/${userDataId}/address`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (status === 200) {
      if (data.length === 0) {
        return;
      }
      localStorage.setItem('userAddressId', JSON.stringify(data[0].id));
      dispatch(saveUserAddress(data));
    }

  } catch (error) {

  }
}

export const deleteUserAddress = () => async (dispatch) => {

  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const userAddressId = JSON.parse(localStorage.getItem('userAddressId'))
  const { status } = await axiosInstance.delete(`/user/${userDataId}/address/${userAddressId}`)

  if (status === 200) {
    dispatch(deleteUserAddress());
    dispatch(closeProfilEdit());
    dispatch(sendNotification('Votre adresse a bien été supprimée'));
  }
}

/* Other users */

export const getOtherUserAddress = (userId) => async (dispatch) => {

  try {

    const { data, status } = await axiosInstance.get(`/user/${userId}/address`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (status === 200) {
      if (data.length === 0) {
        return;
      }
      dispatch(saveOtherUserAddress(data));
    }

  } catch (error) {

  }
}
