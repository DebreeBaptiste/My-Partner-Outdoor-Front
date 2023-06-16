import { logout } from '../api/auth';
import { sendNotification } from '../store/reducers/notification';

import { axiosInstance } from './axiosInstance';

export const deleteUser = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { data, status } = await axiosInstance.delete(`/user/${userDataId}`, {
    headers: {
      Authorization: axiosInstance.defaults.headers.common['Authorization']
    }
  })

  if (status === 200) {
    dispatch(sendNotification('Votre compte a bien été supprimé'));
    dispatch(logout());
  }

}
