/* Tools */
import PropTypes from 'prop-types';

/* Style */
import './styles.scss';

export const Button = ({ children, className, onClick }) => {
  return (
    <button type="button" className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string.isRequired]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
