import { saveUser } from '../store/reducers/user';


// eslint-disable-next-line import/prefer-default-export
export const login = () => async (dispatch, getState) => {
  const state = getState();


  const { email, password } = state.user.credentials;

  const response = await fetch('http://localhost:4000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });


  const data = await response.json();


  dispatch(saveUser(data));

  // defaults.headers.common['Authorization'] = `Bearer ${data.token}`;


};

export const logout = () => (dispatch) => {
  dispatch(saveUser({}));
  // defaults.headers.common['Authorization'] = null;
};
