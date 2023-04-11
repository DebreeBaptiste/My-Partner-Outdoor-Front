import { sendNotification } from '../store/reducers/notification';
import { closeModal } from '../store/reducers/modalLogin';
import { addErrorMessage } from '../store/reducers/error';
import { userLogged, userLogout } from '../store/reducers/userLogin';
import { closeProfilEdit, saveUser } from '../store/reducers/userDetails';
import { axiosInstance } from './axiosInstance';




export const login = (navigate) => async (dispatch, getState) => {

  const state = getState();



  const { email, password } = state.user.credentials;

  try {
    const { data, status } = await axiosInstance.post('/user/login', {
      email,
      password
    });

    console.log(data)

    dispatch(saveUser({}));

    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;


  finally {
      navigate('/home');
      window.scrollTo({ top: 0 });
    }
  };

  export const logout = () => (dispatch) => {
    dispatch(userLogout());
    axiosInstance.defaults.headers.common['Authorization'] = null;
  };
