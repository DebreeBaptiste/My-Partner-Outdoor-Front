import { saveUser, userLogout } from '../store/reducers/userLogin';
import { axiosInstance } from './axiosInstance';


export const login = () => async (dispatch, getState) => {
  const state = getState();


  const { email, password } = state.user.credentials;

  const { data } = await axiosInstance.post('/user/login', {
    email,
    password



  });

  console.log(data)

  dispatch(saveUser({}));

  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;


};

export const logout = () => (dispatch) => {
  dispatch(userLogout());
  axiosInstance.defaults.headers.common['Authorization'] = null;
};
