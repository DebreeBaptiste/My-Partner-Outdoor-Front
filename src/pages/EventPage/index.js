/* Tool */
import { useDispatch, useSelector } from 'react-redux';

/* Component */
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { About } from '../../components/About';
import { Messages } from '../../components/Messages';
import { Participants } from '../../components/Participants';
import { sendNotification } from '../../store/reducers/notification';

/* Image/logo */
import eventHeaderPicture from '../../assets/resource/event-details.jpg';


/* Style */
import './styles.scss';


export const EventPage = () => {

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const userLogged = useSelector((state) => state.user.logged);

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

  if (!userLogged && pathname === '/event/1/chat') {
    return < Navigate to="/event/1/" />
  }
  const classNameLink = ({ isActive }) => `event-detail-nav-link ${isActive ? 'active-link' : ''}`;

  return (
    <main className='event-detail'>
      <header className="event-detail-detail-header">
        <img className='event-detail-header-picture' src={eventHeaderPicture} />
        <div className='event-detail-header-content'>
          <div className='event-detail-header-content-text'>
            <p>SAMEDI 3 JUIN 2023 de 13:00 à 17:00</p>
            <p>Tour du Salagou en VTT</p>
          </div>
          {userLogged && <Button className={'event-detail-header-button btn-purple'} children={'Je participe'} onClick={handleClickParticipateNotification} />}
        </div>
      </header>
      <nav className='event-detail-nav'>
        <ul className={`${userLogged ? "event-detail-nav-list-logged" : "event-detail-nav-list"}`}>
          <NavLink to="/event/1/" className={classNameLink}><li className='event-detail-nav-item active-link'>A propos</li></NavLink>
          {userLogged && <NavLink to="/event/1/chat" className={classNameLink}><li className='event-detail-nav-item'>Discussion</li></NavLink>}
          <NavLink to="/event/1/participants" className={classNameLink}><li className='event-detail-nav-item'>Participants</li></NavLink>
          <a onClick={copyToClip}><li className='event-detail-nav-item event-detail-nav-item-share'>Partager</li></a>
        </ul>
      </nav>

      <section className='event-detail-section'>

        {(userLogged && pathname === '/event/1/chat') && <Messages />}
        {pathname === '/event/1/participants' && <Participants />}
        {pathname === '/event/1/' && <About />}


      </section>
    </main>
  );
}
