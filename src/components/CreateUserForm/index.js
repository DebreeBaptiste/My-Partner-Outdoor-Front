/* tool */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* component */
import { PasswordValidatorSchema } from '../../components/PasswordValidatorSchema';
import PasswordRegisterInput from '../Input/PasswordRegisterInput';
import Input from '../Input';
import SelectInput from '../Input/SelectInput';
import { resetFormField } from '../../store/reducers/createUser';
import { useRef } from 'react';

/* Api */
import { register } from '../../api/register';

/* Selector */
import { isPasswordValidToDisplay } from '../../store/selectors/Password/isPasswordValid';


/* Styles */
import './styles.scss';


export const CreateUserForm = () => {


  const submitButtonRef = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const credentials = useSelector((state) => state.createUser.credentials);
  const errorMessage = useSelector((state) => state.error.message);


  // check if password is valid when password is changed it will be called in PasswordValidatorSchema
  const isValid = isPasswordValidToDisplay(credentials);

  // reset form and navigate to home page
  const handleClickCancel = () => {
    dispatch(resetFormField())
    window.scrollTo({ top: 0 })
    navigate('/');
  };

  // submit form and dispatch register to call api
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(submitButtonRef.current));
  };


  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <h2 className='register-form-title'>Inscription</h2>
      <div className='register-form-field'>
        <Input type='text' id='register-lastname' className='register-form-field' name='lastname' placeholder='Nom' value={credentials.lastname} />
      </div>
      <div className='register-form-field'>
        <Input type='text' id='register-firstname' className='register-form-field' name='firstname' placeholder='Prénom' value={credentials.firstname} />
      </div>
      <div className='register-form-field'>
        <Input type='text' id='register-pseudo' className='register-form-field' name='pseudo' placeholder='Pseudo' value={credentials.pseudo} />
      </div>
      <div className='register-form-field register-form-field-sport'>
        <label htmlFor='register-sport' className='register-form-field-label register-form-field-sport-label'>Choisissez un sport ( obligatoire )</label>
        <SelectInput
          name="sport"
          id="register-sport"
          className='register-form-field-select'
          value={credentials.sport}
          options={[

            { value: 'FootBall', label: 'FootBall' },
            { value: 'BasketBall', label: 'BasketBall' },
            { value: 'PingPong', label: 'PingPong' },
            { value: 'Tennis', label: 'Tennis' },
            { value: 'Velo', label: 'Velo' },
            { value: 'Badminton', label: 'Badminton' }
          ]}
        />
      </div>

      <hr className='register-form-divider' />
      <div className='register-form-field'>
        <Input type="email" id='register-email' className='register-form-field' name='email' placeholder='Email' value={credentials.email} />
      </div>
      <PasswordValidatorSchema isValid={isValid} />

      <p className='register-form-error'>{errorMessage}</p>

      <div className='register-form-field register-form-field-password'>

      </div>
      <div className='register-form-field register-form-field-password'>
        <PasswordRegisterInput

          password={credentials.password}
          name="password"
          id="register-password"
          placeholder="Mot de passe"
          className='register-form-field'

        />
      </div>
      <div className='register-form-field register-form-field-password'>
        <label htmlFor='password-confirm' className='register-form-field-label'></label>
        <PasswordRegisterInput

          password={credentials.repeat_password}
          name="repeat_password"
          id="register-repeat_password"
          placeholder="Confirmer le mot de passe"
          className='register-form-field'
        />
      </div>
      <div className='register-form-button-container'>
        <button type="button" className='register-form-button register-form-button-cancel' onClick={handleClickCancel}>Annuler</button>
        <button type='submit'
          className="register-form-button register-form-button-submit"
          ref={submitButtonRef}
        >Enregistrer</button>
      </div>
    </form>
  );
};
