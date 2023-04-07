import { addErrorMessage } from '../store/reducers/error';
import { createErrorMessage } from '../store/selectors/createErrorMessage';

export const register = () => async (dispatch, getState) => {

  const state = getState();


  const { firstname, lastname, pseudo, sport, email, password, repeat_password } = state.createUser.credentials;

  // check if all field are filled and send error message if not
  if (createErrorMessage(state.createUser.credentials) !== undefined) {
    dispatch(addErrorMessage(createErrorMessage(state.createUser.credentials)));
    return
  }

  try {

    const response = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, pseudo, sport, email, password, repeat_password }),
    });

    console.log(response)
    if (response.status === 200) {

      const data = await response.json();
    }

  } catch (error) {
    console.log(error);
  }
  // reset field and redirect to landing page




  // defaults.headers.common['Authorization'] = `Bearer ${data.token}`;


};
