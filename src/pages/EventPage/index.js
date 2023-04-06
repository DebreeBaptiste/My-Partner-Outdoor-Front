/* Tool */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Component */
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { About } from '../../components/About';
import { Messages } from '../../components/Messages';
import { Participants } from '../../components/Participants';
import { Notification } from '../../components/Notification';

/* Image/logo */
import eventHeaderPicture from '../../assets/resource/event-details.jpg';


/* Style */
import './styles.scss';


export const EventPage = () => {

  const { pathname } = useLocation();

  const userLogged = useSelector((state) => state.user.logged);

  // Copy to clipboard logic
  const [copySuccessNotification, setCopySuccessNotification] = useState(false);

  const copyToClip = async () => {
    if (participateNotification) {
      return
    }

    await navigator.clipboard.writeText(location.href);
    setCopySuccessNotification(true);
  }

  // Participate logic
  const [participateNotification, setParticipateNotification] = useState(false);

  const handleClickParticipateNotification = () => {
    if (copySuccessNotification) {
      return
    }
    setParticipateNotification(true);
  }

  // Close notification auto after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessNotification(false);
      setParticipateNotification(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [copySuccessNotification, participateNotification]);

  if (!userLogged && pathname === '/event/1/chat') {
    return < Navigate to="/event/1/" replace />
  }


  return (
    <main className='event-detail'>
      <Notification message="Lien de l'évênement a été copié !" onClick={() => setCopySuccessNotification(false)} open={copySuccessNotification} />
      <Notification message="Vous participez à l'évênement" onClick={() => setParticipateNotification(false)} open={participateNotification} />
      <header className="event-header">
        <img className='event-header-picture' src={eventHeaderPicture} />
        <div className='event-header-content'>
          <div className='event-header-content-text'>
            <p>SAMEDI 3 JUIN 2023 de 13:00 à 17:00</p>
            <p>Tour du Salagou en VTT</p>
          </div>
          {userLogged && <Button className={'event-header-button btn-purple'} children={'Je participe'} onClick={handleClickParticipateNotification} />}
        </div>
      </header>
      <nav className='event-nav'>
        <ul className={`${userLogged ? "event-nav-list-logged" : "event-nav-list"}`}>
          <NavLink to="/event/1/" className="event-nav-link"><li className='event-nav-item active'>A propos</li></NavLink>
          {userLogged && <NavLink to="/event/1/chat" className="event-nav-link"><li className='event-nav-item'>Discussion</li></NavLink>}
          <NavLink to="/event/1/participants" className="event-nav-link"><li className='event-nav-item'>Participants</li></NavLink>
          <a onClick={copyToClip}><li className='event-nav-item event-nav-item-share'>Partager</li></a>
        </ul>
      </nav>

      <section className='event-section'>

        {(userLogged && pathname === '/event/1/chat') && <Messages />}
        {pathname === '/event/1/participants' && <Participants />}
        {pathname === '/event/1/' && <About />}


      </section>
    </main>
  );
}
