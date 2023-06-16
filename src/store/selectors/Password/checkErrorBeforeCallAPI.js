import { addErrorMessage } from '../../reducers/error';
import { createEmptyFieldErrorMessage } from './createEmptyFieldErrorMessage';
import { isPasswordValid } from './isPasswordValid';

export const checkErrorBeforeCallAPI = (state, dispatch) => {

  // check if all field are filled and send error message if not
  const emptyFieldErrorMessage = createEmptyFieldErrorMessage(state.createUser.credentials);
  if (emptyFieldErrorMessage !== undefined) {
    dispatch(addErrorMessage(emptyFieldErrorMessage));
    return false
  }

  // check if password respect valid schema and send error message
  if (isPasswordValid(state.createUser.credentials) !== true) {
    dispatch(addErrorMessage("Le mot de passe doit respecter tous les critères"));
    return false
  }

  // check if password and repeat password are the same and send error message
  if (state.createUser.credentials.password !== state.createUser.credentials.repeat_password) {
    dispatch(addErrorMessage("Les mots de passe ne sont pas identiques"));
    return false
  }

  return true

}
