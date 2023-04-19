import { saveUser } from '../store/reducers/userDetails';
import { saveOtherUser } from '../store/reducers/userProfil';
import { axiosInstance } from './axiosInstance';

/* User logged */
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

/* Other user */
export const getOtherUser = (userId) => async (dispatch) => {


  const { data, status } = await axiosInstance.get(`/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  if (status === 200) {

    dispatch(saveOtherUser({
      firstname: data.firstname,
      lastname: data.lastname,
      pseudo: data.pseudo,
      id: data.id,
      picture: data.picture,
      email: data.email,
      bio: data.bio,
      birthday: data.birthday,
    }));


  }
}

