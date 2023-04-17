import './styles.scss'

import locationLogo from '../../assets/icon-location-pin.svg';
import organizerLogo from '../../assets/icon-user.svg';
import participantsLogo from '../../assets/icon-user-couple.svg';
import levelLogo from '../../assets/icon-trending-up.svg';
import priceLogo from '../../assets/icon-currency-euro.svg';
import equipementLogo from '../../assets/icon-security-important.svg';
import { useSelector } from 'react-redux';


export const About = () => {

  const event = useSelector((state) => state.eventDetails.event);

  return (<div className='event-about'>
    <div className='event-about-col-1'>

      <div className='event-about-location event-about-item'>
        <img src={locationLogo} className='event-about-icon' />
        <span>{`${event.street}, ${event.zip_code} ${event.city}`}</span>
      </div>
      <div className='event-about-organizer event-about-item'>
        <img src={organizerLogo} className='event-about-icon' />
        <span>Patrick Poitou</span>
      </div>
      <div className='event-about-participants-max event-about-item'>
        <img src={participantsLogo} className='event-about-icon' />
        <span>{`${event.number} participants maximum`}</span>
      </div>
      <div className='event-about-level event-about-item'>
        <img src={levelLogo} className='event-about-icon' />
        <span>{`Niveau ${event.level} demandé`}</span>
      </div>
    </div>

    <div className='event-about-col-2'>
      <div className='event-about-price event-about-item'>
        <img src={priceLogo} className='event-about-icon' />
        <span>{`${event.price} euros de participation demandé`}</span>
      </div>
      <div className='event-about-equipement'>
        <img src={equipementLogo} className='event-about-icon' />
        <span>Vous devez ramaner :</span>
        <ul className="event-about-equipement-list">
          <li className="event-about-equipement-item">{event.equipement}</li>
        </ul>
      </div>
    </div>

    <div className='event-about-description'>
      <h3 className='event-about-description-title'>Description de l'évênement :</h3>
      <p className='event-about-description-text'>
        {event.description}
      </p>
    </div>

  </div>
  );
}
