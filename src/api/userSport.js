import { axiosInstance } from './axiosInstance'
import { saveSport } from '../store/reducers/userDetails'
import { saveOtherUserSport } from '../store/reducers/userProfil'

export const getUserSport = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { data, status } = await axiosInstance.get(`/user/${userDataId}/sports`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  if (status === 200) {
    dispatch(saveSport(data));
  }
}

export const addUserSport = (id) => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))

  try {
    const response = await axiosInstance.post(`/user/${userDataId}/sport/${id}`);

  } catch (error) {
    console.log(error);
  }

}

export const deleteUserSport = (id) => async () => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))

  try {
    const response = await axiosInstance.delete(`/user/${userDataId}/sport/${id}`);

  } catch (error) {
    console.log(error);
  }

}

/* Other User */

export const getOtherUserSport = (userId) => async (dispatch) => {

  const { data, status } = await axiosInstance.get(`/user/${userId}/sports`)

  if (status === 200) {
    dispatch(saveOtherUserSport(data));
  }
}
