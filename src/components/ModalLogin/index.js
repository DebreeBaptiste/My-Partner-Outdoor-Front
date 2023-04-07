import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCredentialsValue } from 'src/store/reducers/user';
import { login } from 'src/api/auth';

/* Image */
import logo from 'src/assets/mountain-adventure-green.svg';
import viewIcon from 'src/assets/icon-view-visible.svg';
import hiddenIcon from 'src/assets/icon-view-hidden.svg';

/* Style */
import './styles.scss';
import { closeModal } from '../../store/reducers/modal';

export const ModalLogin = ({ open, onClick }) => {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.credentials.email);
  const password = useSelector((state) => state.user.credentials.password);
  const userLogged = useSelector((state) => state.user.logged);

  const modalOpen = useSelector((state) => state.modal.modalOpen);

  useEffect(() => {

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);


  const handClickModalBackdrop = (event) => {
    if (event.target.className === "modal-login active") {
      dispatch(closeModal());
    }
  };
  const handleClickPageRedirect = () => {
    setTimeout(() => {
      dispatch(closeModal());
    }, 0);
  }

  const handleChangeField = (value, name) => {
    dispatch(changeCredentialsValue({ value, name }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
    dispatch(closeModal());
    navigate('/home');
  };

  return (

    <dialog className={`modal-login ${modalOpen ? "active" : ""}`} open={modalOpen} onClick={handClickModalBackdrop}>
      <div className="modal-login-container">
        <div className="modal-login-container-header">
          <h2 className="modal-login-container-header-title">My Partner Outdoor</h2>
          <img src={logo} className="modal-login-container-header-logo" />
        </div>

        <form action="" className="modal-login-container-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"></label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              className="modal-login-container-form-input"
              value={email}
              onChange={(event) => handleChangeField(event.target.value, event.target.name)}
            />

          </div>

          <div className="modal-login-container-form-password">
            <label htmlFor="password"></label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder='Mot de passe'
              className="modal-login-container-form-input"
              value={password}
              onChange={(event) => handleChangeField(event.target.value, event.target.name)}
            />

            {!showPassword && <img src={viewIcon} className="modal-login-container-form-password-icon" onClick={() => setShowPassword(true)} />}
            {showPassword && <img src={hiddenIcon} className="modal-login-container-form-password-icon" onClick={() => setShowPassword(false)} />}
          </div>
          <div className="modal-login-container-form-button">
            <button type="button" onClick={onClick} className="modal-login-container-form-button-cancel">Annuler</button>
            <button type="submit" className="modal-login-container-form-button-submit">Se connecter</button>
          </div>
        </form>
        <Link className="modal-login-container-link" to='/forget-password' onClick={handleClickPageRedirect}>Mot de passe oublié ?</Link>
        <Link className="modal-login-container-link-register" to='/register' onClick={handleClickPageRedirect}>Vous n'avez pas encore de compte ?</Link>
      </div>
    </dialog>


  );
};
