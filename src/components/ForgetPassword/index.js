import { Link } from 'react-router-dom';
// == Import
import './styles.scss';

// == Composant
function ForgetPassword() {
  return (
    <section className='forgetpassword-page'>

      <div className='forgetpassword'>
        <h1 className='forgetpassword__title'>Mot de passe oublié</h1>
        <form className='forgetpassword__form'>
          <p className='forgetpassword__form__text'>Remplissez les deux champs afin de réinitialiser votre mot de passe</p>
          <p className='forgetpassword__form__text'>Saisissez un mot de passe en respectant :</p>
          <p className='forgetpassword__form__text'>
            <span>Minimum: 1 majuscule, </span>
            <span>1 minuscule, </span>
            <span>1 chiffre, </span>
            <span>1 caractère spécial, </span>
            <span>8 caractères.</span>
          </p>
          <input className='forgetpassword__form__input' type="password" name="password" placeholder="Votre mot de passe" />
          <input className='forgetpassword__form__input' type="password" name="password_repeat" placeholder="Confirmez votre mot de passe" />
          <div className='forgetpassword__form__button'>
            <button className='forgetpassword__form__button__cancel' type="button"><Link to="/">Annuler</Link></button>
            <button className='forgetpassword__form__button__submit' type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  );
}

// == Export
export default ForgetPassword;
