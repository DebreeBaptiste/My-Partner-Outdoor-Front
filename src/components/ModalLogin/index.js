import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCredentialsValue } from 'src/store/reducers/userLogin';
import { resetCredentialsValue } from '../../store/reducers/userLogin';
import { closeModal } from '../../store/reducers/modal';
import { login } from 'src/api/auth';
import PasswordLoginInput from 'src/components/Input/PasswordLoginInput';

/* Image */
import logo from 'src/assets/mountain-adventure-green.svg';

/* Style */
import './styles.scss';
import EmailLoginInput from '../Input/EmailLoginInput';

export const ModalLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.credentials.email);
  const password = useSelector((state) => state.user.credentials.password);

  const modalOpen = useSelector((state) => state.modal.modalOpen);

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
      dispatch(closeModal());
    }
  };
  const handleClickPageRedirect = () => {
    setTimeout(() => {
      dispatch(closeModal());
    }, 0);
  };

  const handleChangeField = (value, name) => {
    dispatch(changeCredentialsValue({ value, name }));
  };

  const handlecloseModal = () => {
    // dispatch(resetCredentialsValue());
    dispatch(closeModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
    dispatch(closeModal());
    navigate('/home');
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
              onClick={handlecloseModal}
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
