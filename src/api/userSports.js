import { axiosInstance } from './axiosInstance'
import { addSport } from '../store/reducers/userDetails'

export const getUserSport = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { data, status } = await axiosInstance.get(`/user/${userDataId}/sports`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  if (status === 200) {

    data.map((sport) => {
      dispatch(addSport(sport))
    })
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

export const deleteUserSport = (id) => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))

  try {
    const response = await axiosInstance.delete(`/user/${userDataId}/sport/${id}`);

  } catch (error) {
    console.log(error);
  }

}
