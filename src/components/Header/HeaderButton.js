/* Tools */
import PropTypes from 'prop-types';

/* Style */
import './styles.scss';

export const HeaderButton = ({ children, className }) => {
  return (
    <button type="button" className={`button ${className}`} >
      {children}
    </button>
  );
}

HeaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
