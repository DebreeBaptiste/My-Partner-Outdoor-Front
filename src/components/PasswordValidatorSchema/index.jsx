/* styles */
import './styles.scss';


export const PasswordValidatorSchema = ({ isValid }) => {
  return (

    <div className='password-validator-information'>
      <p>Saisissez un mot de passe en respectant :</p>
      <p className='password-validator-information-item'>Minimum 1 majuscule
        <span
          className={isValid.includes('uppercase') ? "password-validator-information-valid" : "password-validator-information-invalid"}
        >
          {isValid.includes("uppercase") ? "✓" : "✘"}
        </span>
      </p>
      <p className='password-validator-information-item'>Minimum 1 minuscule
        <span
          className={isValid.includes('lowercase') ? "password-validator-information-valid" : "password-validator-information-invalid"}
        >
          {isValid.includes("lowercase") ? "✓" : "✘"}
        </span>
      </p>
      <p className='password-validator-information-item'>Minimum 1 chiffre
        <span
          className={isValid.includes('number') ? "password-validator-information-valid" : "password-validator-information-invalid"}
        >
          {isValid.includes("number") ? "✓" : "✘"}
        </span>
      </p>
      <p className='password-validator-information-item'>Minimum 1 caractère spécial
        <span className={isValid.includes('specialChar') ? "password-validator-information-valid" : "password-validator-information-invalid"}
        >
          {isValid.includes("specialChar") ? "✓" : "✘"}
        </span>
      </p>
      <p className='password-validator-information-item'>Minimum 8 caractères
        <span className={isValid.includes('length') ? "password-validator-information-valid" : "password-validator-information-invalid"}
        >
          {isValid.includes("length") ? "✓" : "✘"}
        </span>
      </p>
    </div>
  )
}
