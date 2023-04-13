import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCredentialsValue } from '../../store/reducers/userLogin';
import { closeModal } from '../../store/reducers/modalLogin';
import { login } from 'src/api/auth';
import PasswordLoginInput from 'src/components/Input/PasswordLoginInput';

/* Image */
import logo from 'src/assets/mountain-adventure-green.svg';

/* Style */
import './styles.scss';
import EmailLoginInput from '../Input/EmailLoginInput';
import { addErrorMessage } from '../../store/reducers/error';

export const ModalLogin = () => {



  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.credentials.email);
  const password = useSelector((state) => state.user.credentials.password);

  const modalOpen = useSelector((state) => state.modalLogin.modalOpen);
  const errorMessage = useSelector((state) => state.error.message);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [modalOpen]);

  const handClickModalBackdrop = (event) => {
    if (event.target.className === 'modal-login active') {
      // dispatch(resetCredentialsValue());
      dispatch(addErrorMessage(''));
      dispatch(closeModal());
    }
  };
  const handleClickPageRedirect = () => {
    setTimeout(() => {
      dispatch(closeModal());
      dispatch(addErrorMessage(''));
    }, 0);
  };

  const handleCloseModal = () => {
    // dispatch(resetCredentialsValue());
    dispatch(addErrorMessage(''));
    dispatch(closeModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(navigate));
  };

  return (
    <dialog
      className={`modal-login ${modalOpen ? 'active' : ''}`}
      open={modalOpen}
      onClick={handClickModalBackdrop}
    >
      <div className="modal-login-container">
        <div className="modal-login-container-header">
          <h2 className="modal-login-container-header-title">
            My Partner Outdoor
          </h2>
          <img src={logo} className="modal-login-container-header-logo" />
        </div>
        <p className='modal-login-error'>{errorMessage}</p>
        <form
          action=""
          className="modal-login-container-form"
          onSubmit={handleSubmit}
        >
          <div>
            <EmailLoginInput
              type="email"
              name="email"
              id="login-email"
              placeholder="Email"
              className="modal-login-container-form"
              value={email}
            />
          </div>

          <div className="modal-login-container-form-password">
            <PasswordLoginInput
              name="password"
              id="login-password"
              placeholder="Mot de passe"
              className="modal-login-container-form"
              value={password}
            />
          </div>
          <div className="modal-login-container-form-button">
            <button
              type="button"
              onClick={handleCloseModal}
              className="modal-login-container-form-button-cancel"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="modal-login-container-form-button-submit"
            >
              Se connecter
            </button>
          </div>
        </form>
        <Link
          className="modal-login-container-link"
          to="/forget-password"
          onClick={handleClickPageRedirect}
        >
          Mot de passe oublié ?
        </Link>
        <Link
          className="modal-login-container-link-register"
          to="/register"
          onClick={handleClickPageRedirect}
        >
          Vous n'avez pas encore de compte ?
        </Link>
      </div>
    </dialog>
  );
};
