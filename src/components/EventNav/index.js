import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../store/reducers/notification';
import { NavLink, useParams } from 'react-router-dom';

/* Style */
import './styles.scss';

export const EventNav = ({ userLogged }) => {

  const classNameLink = ({ isActive }) => `event-detail-nav-link ${isActive ? 'active-link' : ''}`;

  const eventId = useParams().id

  const dispatch = useDispatch();


  // Copy link logic
  const notificationOpen = useSelector((state) => state.notification.open);

  const copyToClip = async () => {
    if (notificationOpen) {
      return
    }

    await navigator.clipboard.writeText(location.href);
    dispatch(sendNotification("Le lien de l'évênement a été copié !"));
  }

  return (
    <nav className='event-detail-nav'>
      <ul className={`${userLogged ? "event-detail-nav-list-logged" : "event-detail-nav-list"}`}>

        <NavLink
          to={`/event/${eventId}/about`}
          className={classNameLink}>
          <li className='event-detail-nav-item active-link'>A propos</li>
        </NavLink>

        {userLogged && <NavLink
          to={`/event/${eventId}/messages`}
          className={classNameLink}>
          <li className='event-detail-nav-item'>Discussion</li>
        </NavLink>}

        <NavLink
          to={`/event/${eventId}/participants`}
          className={classNameLink}>
          <li className='event-detail-nav-item'>Participants</li>
        </NavLink>

        <a onClick={copyToClip}
        ><li className='event-detail-nav-item event-detail-nav-item-share'>Partager</li>
        </a>

      </ul>
    </nav>
  )
}
