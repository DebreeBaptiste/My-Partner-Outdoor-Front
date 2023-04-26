import { sendNotification } from '../store/reducers/notification';
import { closeModal } from '../store/reducers/modalLogin';
import { addErrorMessage } from '../store/reducers/error';
import { userLogged, userLogout } from '../store/reducers/userLogin';
import { closeProfilEdit, saveUser, userDetailsLogout } from '../store/reducers/userDetails';
import { axiosInstance } from './axiosInstance';




export const login = (navigate) => async (dispatch, getState) => {

  const state = getState();

  const { email, password } = state.user.credentials;

  try {
    const { data, status } = await axiosInstance.post('/user/login', {
      email,
      password
    },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

    if (status === 200) {
      console.log("data", data);
      // localStorage.setItem('token', data.token);
      // localStorage.setItem('userId', data.id);

      // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      // dispatch(addErrorMessage(""));
      // dispatch(userLogged());
      // dispatch(closeModal());
      // dispatch(sendNotification(`Bienvenue ${data.pseudo} !`));
    }


  } catch (error) {
    if (error) {
      console.log("error", error);
      dispatch(addErrorMessage("Veuillez vérifier vos identifiants"));
    }
    return
  }
  dispatch(addErrorMessage(""));
  navigate('/home');
  window.scrollTo({ top: 0 });

};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('userAddressId');
  axiosInstance.defaults.headers.common['Authorization'] = null;
  dispatch(closeProfilEdit());
  dispatch(userDetailsLogout());
  dispatch(userLogout());
  window.scrollTo({ top: 0 });
};
