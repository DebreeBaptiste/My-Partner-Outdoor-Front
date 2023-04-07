import { addErrorMessage } from '../reducers/error';

export const checkSamePassword = (state, dispatch, button) => {
  if (state.password !== state.repeat_password) {
    dispatch(addErrorMessage('Les mots de passe ne sont pas identiques'));
    button.disabled = true;
    return
  }
  if (state.password === state.repeat_password) {
    dispatch(addErrorMessage(''));
    button.disabled = false;
    return
  }
}
