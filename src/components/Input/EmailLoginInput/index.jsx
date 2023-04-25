import { connect } from 'react-redux';
import { changeCredentialsValue } from '../../../store/reducers/userLogin';

export const EmailLoginInput = ({
  name,
  changeCredentialsValue,
  id,
  placeholder,
  className,
  value,
  type,
}) => {
  const handleChange = (event) => {
    changeCredentialsValue({
      value: event.target.value,
      name: event.target.name,
    });
  };

  return (
    <>
      <label htmlFor={id} className={`${className}-label`}></label>

      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${className}-input`}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

// Connect component to the Redux store
export default connect(null, {
  changeCredentialsValue,
})(EmailLoginInput);
