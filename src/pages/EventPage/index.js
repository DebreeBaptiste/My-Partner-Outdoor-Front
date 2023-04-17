/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, Navigate, useLocation, useParams } from 'react-router-dom';

/* Component */
import { Button } from '../../components/Button';
import { About } from '../../components/About';
import { Messages } from '../../components/Messages';
import { Participants } from '../../components/Participants';
import { sendNotification } from '../../store/reducers/notification';

/* Image/logo */
import eventHeaderPicture from '../../assets/resource/event-details.jpg';


/* Style */
import './styles.scss';
import { getOneEvent } from '../../api/event';


export const EventPage = () => {

  const eventId = useParams().id

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneEvent(eventId));
  }, []);


  const userLogged = useSelector((state) => state.user.logged);
  const event = useSelector((state) => state.eventDetails.event);

  // Copy link logic
  const notificationOpen = useSelector((state) => state.notification.open);

  const copyToClip = async () => {
    if (notificationOpen) {
      return
    }

    await navigator.clipboard.writeText(location.href);
    dispatch(sendNotification("Lien de l'évênement a été copié !"));
  }



  const handleClickParticipateNotification = () => {
    if (notificationOpen) {
      return
    }
    dispatch(sendNotification("Vous participez à l'évênement"));
  }

  if (!userLogged && pathname === `/event/${eventId}/messages`) {
    return < Navigate to={`/event/${eventId}`} />
  }
  const classNameLink = ({ isActive }) => `event-detail-nav-link ${isActive ? 'active-link' : ''}`;

  return (
    <main className='event-detail'>
      <header className="event-detail-header">
        <div className="event-detail-header-picture-container">
          <img className='event-detail-header-picture' src={event.picture} alt='picture of people doing outdoor activity' />

        </div>
        <div className='event-detail-header-content'>
          <div className='event-detail-header-content-text'>
            <p>{`Le ${event.start_date} de ${event.start_hour} à ${event.finish_hour}`}</p>
            <p>{event.title.toUpperCase()}</p>
          </div>

          {userLogged && <Button
            className={'event-detail-header-button btn-purple'}
            children={'Je participe'}
            onClick={handleClickParticipateNotification}
          />}

        </div>
      </header>

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

      <section className='event-detail-section'>

        {(userLogged && pathname === `/event/${eventId}/messages`) && <Messages />}
        {pathname === `/event/${eventId}/participants` && <Participants />}
        {pathname === `/event/${eventId}/about` && <About />}


      </section>
    </main>
  );
}
