import { resetFormField } from '../store/reducers/createUser';
import { addErrorMessage } from '../store/reducers/error';
import { sendNotification } from '../store/reducers/notification';
import { checkErrorBeforeCallAPI } from '../store/selectors/Password/checkErrorBeforeCallAPI';
import { axiosInstance } from './axiosInstance';

export const register = (navigate) => async (dispatch, getState) => {


  const state = getState();

  const { firstname, lastname, pseudo, sport, email, password, repeat_password } = state.createUser.credentials;

  if (!checkErrorBeforeCallAPI(state, dispatch)) {
    return
  }

  try {

    const response = await axiosInstance.post('/user', { firstname, lastname, pseudo, sport, email, password, repeat_password });

    if (response.status === 500) {
      dispatch(addErrorMessage("Une erreur est survenue, veuillez réessayer ultérieurement"));
    }

    if (response.status === 200) {
      dispatch(resetFormField());
      dispatch(addErrorMessage(""));
      dispatch(sendNotification("Votre compte a bien été créé"));

    }

  } catch (error) {
    console.log(error);
    dispatch(addErrorMessage("Une erreur est survenue, veuillez réessayer ultérieurement"));
  }

  finally {
    window.scrollTo({ top: 0 })
    navigate('/');
  }

};
