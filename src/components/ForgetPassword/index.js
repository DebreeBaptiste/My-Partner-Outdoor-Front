// == Import
import './styles.scss';

// == Composant
function ForgetPassword() {
  return (
    <div className='forgetpassword'>
      <h1 className='forgetpassword__title'>Mot de passe oublié</h1>
      <form className='forgetpassword__form'>
        <label className='forgetpassword__form__text'>Écrivez votre mail afin de générer un nouveau mot de passe</label>
        <input className='forgetpassword__form__input' type="email" name="email" placeholder="Adresse email" />
        <div className='forgetpassword__form__button'>
          <button className='forgetpassword__form__button__cancel' type="button"><Link to="/">Annuler</Link></button>
          <button className='forgetpassword__form__button__submit' type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

// == Export
export default ForgetPassword;
