/* Tool */
import PropTypes from 'prop-types';

/* Icon */
import closeIcon from '../../assets/icon-close-circle.svg';

/* Style */
import './styles.scss';

export const Notification = ({ message, onClick, open }) => {


  return (
    <div className={`event-copy ${open ? 'active' : ""}`}>
      <div className='event-copy-close-button' onClick={onClick}>
        <img src={closeIcon} className="event-copy-close-icon" />
      </div>
      <p className="event-copy-text">{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
