import { axiosInstance } from './axiosInstance';
import { sendNotification } from '../store/reducers/notification';
import { closeProfilEdit, closeProfilPictureEdit, saveProfilePicture, saveUserAddress, updatePictureDate, updateUserDetails } from '../store/reducers/userDetails';



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
        picture,
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
        picture,
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

export const editUserPicture = (picture) => async (dispatch, getState) => {

  const userDataId = JSON.parse(localStorage.getItem('userId'));

  try {

    const { data, status } = await axiosInstance.patch(`/user/${userDataId}/upload`, picture);

    if (status === 200) {
      dispatch(saveProfilePicture(data.picture));
      dispatch(updatePictureDate(data.updated_at));
      dispatch(closeProfilPictureEdit());
    }

  } catch (error) {
    console.log(error);
  }
}








