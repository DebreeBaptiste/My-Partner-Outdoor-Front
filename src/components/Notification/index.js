/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { closeNotification, resetNotificationMessage } from '../../store/reducers/notification';

/* Icon */
import closeIcon from '../../assets/icon-close-circle.svg';

/* Style */
import './styles.scss';

export const Notification = () => {

  const dispatch = useDispatch();

  const open = useSelector((state) => state.notification.open);
  const message = useSelector((state) => state.notification.message);

  const handleCloseNotification = () => {
    dispatch(closeNotification());
  };

  // Close notification auto after 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (open) {
        handleCloseNotification();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [open]);


  const handleTransitionEnd = () => {
    if (!open) {
      dispatch(resetNotificationMessage());
    }
  };

  return (
    <div className={`notification ${open ? 'active' : ""}`} onTransitionEnd={handleTransitionEnd}>
      <div className='notification-close-button' onClick={handleCloseNotification}>
        <img src={closeIcon} className="notification-close-icon" />
      </div>
      <p className="notification-text">{message}</p>
    </div>
  );
}


