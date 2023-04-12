import { axiosInstance } from './axiosInstance'
import { addSport } from '../store/reducers/userDetails'

export const getUserSport = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { data, status } = await axiosInstance.get(`/user/${userDataId}/sports`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}
