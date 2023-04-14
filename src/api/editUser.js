import { axiosInstance } from './axiosInstance';
import { sendNotification } from '../store/reducers/notification';
import { closeProfilEdit, saveUserAddress, updateUserDetails } from '../store/reducers/userDetails';



export const editUser = () => async (dispatch, getState) => {

  const state = getState();
  const user = state.userDetails.user;
  const userDataId = JSON.parse(localStorage.getItem('userId'))
  const { firstname, lastname, pseudo, email, picture, bio, birthday, address } = user;

  const { zip_code, city, street, number } = address;



  if ((zip_code && city && street && number !== '') && (JSON.parse(localStorage.getItem('userAddressId') === null))) {

    try {

      const { status } = await axiosInstance.patch(`/user/${userDataId}`, {
        firstname,
        lastname,
        pseudo,
        email,
        picture: "photo",
        bio,
        birthday,
        zip_code,
        city,
        street,
        number,
      });

      if (status === 200) {
        dispatch(sendNotification('Vos informations ont bien été modifiées'));
        dispatch(closeProfilEdit());
        window.scrollTo({ top: 0 })

      }

    } catch (error) {
      console.log(error);
    }
  } else {
    try {

      const { status } = await axiosInstance.patch(`/user/${userDataId}`, {
        firstname,
        lastname,
        pseudo,
        email,
        picture: "photo",
        bio,
        birthday,
      });

      if (status === 200) {
        dispatch(closeProfilEdit());
        dispatch(sendNotification('Vos informations ont bien été modifiées'));
        window.scrollTo({ top: 0 })

      }

    } catch (error) {
      console.log(error);
    }
  }

}








