import { resetFormField } from '../store/reducers/createUser';
import { addErrorMessage } from '../store/reducers/error';
import { checkErrorBeforeCallAPI } from '../store/selectors/Password/checkErrorBeforeCallAPI';

export const register = () => async (dispatch, getState) => {

  const state = getState();

  const { firstname, lastname, pseudo, sport, email, password, repeat_password } = state.createUser.credentials;

  if (!checkErrorBeforeCallAPI(state, dispatch)) {
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
    if (response.status === 500) {
      dispatch(addErrorMessage("Une erreur est survenue, veuillez réessayer ultérieurement"));
    }

    if (response.status === 200) {
      dispatch(resetFormField());
    }

  } catch (error) {
    console.log(error);
    dispatch(addErrorMessage("Une erreur est survenue, veuillez réessayer ultérieurement"));
  }







  // defaults.headers.common['Authorization'] = `Bearer ${data.token}`;


};
