/* Component */
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';

/* Image/logo */
import eventHeaderPicture from '../../assets/resource/event-details.jpg';


/* Style */
import './styles.scss';
import { About } from '../../components/About';
import { Messages } from '../../components/Messages';

export const EventPage = () => {

  const { pathname } = useLocation();

  return (
    <main className='event'>
      <header className="event-header">
        <img className='event-header-picture' src={eventHeaderPicture} />
        <div className='event-header-content'>
          <div className='event-header-content-text'>
            <p>SAMEDI 3 JUIN 2023 de 13:00 à 17:00</p>
            <p>Tour du Salagou en VTT</p>
          </div>
          <Button className={'event-header-button btn-purple'} children={'Je participe'} />
        </div>
      </header>
      <nav className='event-nav'>
        <ul className='event-nav-list'>
          <NavLink to="/event/1/" className="event-nav-link"><li className='event-nav-item active'>A propos</li></NavLink>
          <NavLink to="/event/1/chat" className="event-nav-link"><li className='event-nav-item'>Discussion</li></NavLink>
          <NavLink to="/event/1/participants" className="event-nav-link"><li className='event-nav-item'>Participants</li></NavLink>
          <li className='event-nav-item event-nav-item-share'>Partager</li>
        </ul>
      </nav>

      <section className='event-section'>

        {pathname === '/event/1/chat' && <Messages />}
        {pathname === '/event/1/participants' && <div>Participants</div>}
        {pathname === '/event/1/' && <About />}


      </section>
    </main>
  );
}
