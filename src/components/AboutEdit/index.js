
import locationLogo from '../../assets/icon-location-pin.svg';
import participantsLogo from '../../assets/icon-user-couple.svg';
import levelLogo from '../../assets/icon-trending-up.svg';
import priceLogo from '../../assets/icon-currency-euro.svg';
import equipementLogo from '../../assets/icon-security-important.svg';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/reducers/modalDelete';
import { closeEventEdit } from '../../store/reducers/eventDetails';


import './styles.scss'

export const AboutEdit = ({ event, onChange }) => {




  return (<div className='event-about-edit'>
    <div className='event-about-edit-col-1'>

      <div className='event-about-edit-location event-about-edit-item'>
        <img src={locationLogo} className='event-about-edit-icon' />

        <div className='event-about-edit-input-container'>
          <label htmlFor='event-number' className='event-about-edit-label'>N° :
            <input
              className='event-about-edit-input'
              id='event-number'
              name='number'
              value={event.number}
              onChange={onChange} />
          </label>

          <label htmlFor='event-street' className='event-about-edit-label'>Rue :
            <input
              className='event-about-edit-input'
              id='event-street'
              name='street'
              value={event.street}
              onChange={onChange}
            />
          </label>

          <label htmlFor='event-zip_code' className='event-about-edit-label'>Code postal :
            <input
              className='event-about-edit-input'
              id='event-zip_code'
              name='zip_code'
              value={event.zip_code}
              onChange={onChange}
            />
          </label>

          <label htmlFor='event-city' className='event-about-edit-label'>Ville :
            <input
              className='event-about-edit-input'
              id='event-city'
              name='city'
              value={event.city}
              onChange={onChange}
            />
          </label>
        </div>

      </div>
      <div className='event-about-edit-participants-max event-about-edit-item'>
        <img src={participantsLogo} className='event-about-edit-icon' />
        <div className='event-about-edit-input-container'>

          <label htmlFor='event-participant-number' className='event-about-edit-label'>Nombre de participant souhaité :
            <input
              className='event-about-edit-input'
              id='event-participant-number'
              name='nb_participant'
              value={event.nb_participant}
              onChange={onChange}
            />
          </label>

        </div>
      </div>

      <div className='event-about-edit-level event-about-edit-item'>
        <img src={levelLogo} className='event-about-edit-icon' />
        <label htmlFor='event-level' className='event-about-edit-label'>Niveau souhaité :

          <select
            className='event-about-edit-input'
            id='event-level'
            name='level'
            value={event.level}
            onChange={onChange}
          >
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Confirmé">Confirmé</option>

          </select>

        </label>
      </div>
    </div>

    <div className='event-about-edit-col-2'>
      <div className='event-about-edit-price event-about-edit-item'>
        <img src={priceLogo} className='event-about-edit-icon' />
        <label htmlFor='event-price' className='event-about-edit-label'>Prix :
          <input
            className='event-about-edit-input'
            id='event-price'
            name='price'
            value={event.price}
            onChange={onChange}
          />
        </label>

      </div>
      <div className='event-about-edit-equipement'>
        <img src={equipementLogo} className='event-about-edit-icon' />

        <label className='event-about-edit-label' htmlFor='event-equipement'>Vous devez ramaner :
          <textarea
            className='event-about-edit-equipement-textarea'
            id='event-equipement'
            name='equipement'
            value={event.equipement}
            onChange={onChange}
          />
        </label>
      </div>
    </div>

    <div className='event-about-edit-description'>
      <label htmlFor='event-description' className='event-about-edit-label'>Description :
        <textarea
          className='event-about-edit-description-textarea'
          id='event-description'
          name='description'
          value={event.description}
          onChange={onChange}
        />
      </label>
    </div>


  </div>

  );
}
