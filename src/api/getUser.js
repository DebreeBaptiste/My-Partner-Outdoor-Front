import { saveUser } from '../store/reducers/userDetails';
import { axiosInstance } from './axiosInstance';

export const getUser = () => async (dispatch) => {
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { data, status } = await axiosInstance.get(`/user/${userDataId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  if (status === 200) {

    if (data.birthday === null) {
      dispatch(saveUser({
        firstname: data.firstname,
        lastname: data.lastname,
        pseudo: data.pseudo,
        id: data.id,
        picture: data.picture,
        email: data.email,
        bio: data.bio,
        birthday: '',
      }));

      if (data.bio === null) {
        dispatch(saveUser({
          firstname: data.firstname,
          lastname: data.lastname,
          pseudo: data.pseudo,
          id: data.id,
          picture: data.picture,
          email: data.email,
          bio: '',
        }));
      }
    }
  }
}