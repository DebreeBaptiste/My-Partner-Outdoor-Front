import { connect } from 'react-redux';
import { updateField } from 'src/store/reducers/createUser';

export const SelectInput = ({
  options,
  updateField,
  className,
  id,
  name,
  value
}) => {

  const handleChange = (event) => {
    updateField({ value: event.target.value, name: event.target.name });
  };

  return (
    <select
      className={className}
      id={id}
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option value=''>Sport</option>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

// Connect component to the Redux store
export default connect(null, { updateField })(SelectInput);
