import { connect } from 'react-redux';

import { updateField } from '../../../store/reducers/createUser';
import { useState } from 'react';

/* Image and Logo */
import viewIcon from '../../../assets/icon-view-visible.svg';
import hiddenIcon from '../../../assets/icon-view-hidden.svg';


export const PasswordRegisterInput = ({
  password,
  updateField,
  name,
  id,
  placeholder,
  className,
}) => {

  const handleChange = (event) => {
    updateField({ value: event.target.value, name: event.target.name });
  };



  const [showPassword, setShowPassword] = useState(false);
  return (<>


    <label
      htmlFor={id}
      className={`${className}-label`}>
    </label>

    <input
      type={`${showPassword ? "text" : "password"}`}
      name={name} id={id}
      placeholder={placeholder}
      className={`${className}-input`}
      value={password}
      onChange={handleChange}
    />
    {!showPassword && <img src={viewIcon} className="modal-login-container-form-password-icon" onClick={() => setShowPassword(true)} />}
    {showPassword && <img src={hiddenIcon} className="modal-login-container-form-password-icon" onClick={() => setShowPassword(false)} />}
  </>);
};

// Connect component to the Redux store
export default connect(null, { updateField })(PasswordRegisterInput);
