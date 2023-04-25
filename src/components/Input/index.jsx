import { connect } from 'react-redux';
import { updateField } from '../../store/reducers/createUser';


export const Input = ({
  name,
  updateField,
  id,
  placeholder,
  className,
  value,
  type,
}) => {

  const handleChange = (event) => {
    updateField({ value: event.target.value, name: event.target.name });
  };


  return (<>


    <label
      htmlFor={id}
      className={`${className}-label`}>
    </label>

    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${className}-input`}
      value={value}
      onChange={handleChange}
    />

  </>);
};

// Connect component to the Redux store
export default connect(null, { updateField })(Input);
