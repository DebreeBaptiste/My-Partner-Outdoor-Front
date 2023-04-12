import { axiosInstance } from './axiosInstance';
import { sendNotification } from '../store/reducers/notification';

export const editUser = (setEdit) => async (dispatch, getState) => {

  const state = getState();
  const user = state.userDetails.user;
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { firstname, lastname, pseudo, email, picture, bio, birthday, address } = user;


  const { zip_code, city, street, number } = address;

  try {

    const { data, status } = await axiosInstance.patch(`/user/${userDataId}`, {
      firstname,
      lastname,
      pseudo,
      email,
      picture: "photo",
      bio,
      birthday,
    });

    if (status === 200) {
      dispatch(sendNotification('Vos informations ont bien été modifiées'));
      window.scrollTo({ top: 0 })
      setEdit(false);
    }

  } catch (error) {
    console.log(error);
  }

}
