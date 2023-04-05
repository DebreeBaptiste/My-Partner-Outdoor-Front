import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Image */
import logo from 'src/assets/mountain-adventure-green.svg';
import viewIcon from 'src/assets/icon-view-visible.svg';
import hiddenIcon from 'src/assets/icon-view-hidden.svg';

/* Style */
import './styles.scss';

export const ModalLogin = ({ open, onClick }) => {

  const [showPassword, setShowPassword] = useState(false);


  const handClickModalContainer = (event) => {
    setTimeout(() => {
      if (event.target.className === "modal-login active" || event.target.className === "modal-login-container-link") {
        onClick(event);
      }
    }, 0);
  };

  return (

    <dialog className={`modal-login ${open ? "active" : ""}`} open={open} onClick={handClickModalContainer}>
      <div className="modal-login-container">
        <div className="modal-login-container-header">
          <h2 className="modal-login-container-header-title">My Partner Outdoor</h2>
          <img src={logo} className="modal-login-container-header-logo" />
        </div>

        <form action="" className="modal-login-container-form">
          <div>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder='Email' className="modal-login-container-form-input" />
          </div>
          <div className="modal-login-container-form-password">
            <label htmlFor="password"></label>
            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Mot de passe' className="modal-login-container-form-input" />
            {!showPassword && <img src={viewIcon} className="modal-login-container-form-password-icon" onClick={() => setShowPassword(true)} />}
            {showPassword && <img src={hiddenIcon} className="modal-login-container-form-password-icon" onClick={() => setShowPassword(false)} />}
          </div>
          <div className="modal-login-container-form-button">
            <button type="button" onClick={onClick} className="modal-login-container-form-button-cancel">Annuler</button>
            <button type="submit" className="modal-login-container-form-button-submit">Se connecter</button>
          </div>
        </form>
        <Link className="modal-login-container-link" to='/forget-password' onClick={handClickModalContainer}>Mot de passe oublié ?</Link>
      </div>
    </dialog>

  );
};
