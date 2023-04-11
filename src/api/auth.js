import { sendNotification } from '../store/reducers/notification';
import { closeModal } from '../store/reducers/modal';
import { addErrorMessage } from '../store/reducers/error';
import { saveUser, userLogout } from '../store/reducers/userLogin';
import { axiosInstance } from './axiosInstance';




export const login = (navigate) => async (dispatch, getState) => {

  const state = getState();



  const { email, password } = state.user.credentials;

  try {
    const { data, status } = await axiosInstance.post('/user/login', {
      email,
      password
    });

    if (status === 200) {
      localStorage.setItem('token', data.token);

      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      dispatch(addErrorMessage(""));
      dispatch(saveUser({ pseudo: data.user.pseudo, id: data.user.id }));
      dispatch(closeModal());
      dispatch(sendNotification(`Bienvenue ${data.user.pseudo} !`));
    }


  } catch (error) {
    if (error.response.status === 400) {
      dispatch(addErrorMessage("Veuillez vérifier vos identifiants"));
    }
  }

  finally {
    navigate('/home');
    window.scrollTo({ top: 0 });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  axiosInstance.defaults.headers.common['Authorization'] = null;
  dispatch(userLogout());
};
