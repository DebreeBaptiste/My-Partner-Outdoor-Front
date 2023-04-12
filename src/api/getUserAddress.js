import { saveUserAddress } from '../store/reducers/userDetails';
import { axiosInstance } from './axiosInstance';

export const getUserAddress = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { data, status } = await axiosInstance.get(`/user/${userDataId}/address`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  if (status === 200) {

    if (data.length === 0) {
      return;
    }

    dispatch(saveUserAddress(data));
  }
}
