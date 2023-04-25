/* Tool */
import { useDispatch } from 'react-redux';

import { openEventPictureEdit, toggleEventEdit } from '../../store/reducers/eventDetails';
import { useLocation, useParams } from 'react-router-dom';


/* Image et logo */
import editIcon from '../../assets/icon-edit.svg';
import editPictureIcon from '../../assets/icon-camera.svg';


/* Style */
import './styles.scss';

export const EventHeaderEdit = ({ event, userLogged, isEventOrganizer, eventDetails, onChange }) => {

  const eventId = useParams().id

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleClickEditEvent = () => {
    dispatch(toggleEventEdit());
  }

  const handleClickOpenEditPictureModal = () => {
    dispatch(openEventPictureEdit());
  };


  return (
    <header className="event-detail-header-edit">
      <div className="event-detail-header-edit-picture-container">
        <div className="event-detail-header-edit-picture-wrapper">

          <img className='event-detail-header-edit-picture'
            src={`${event.picture}?key=${eventDetails.updatePicture}`}
            alt='picture of people doing outdoor activity'
          />

          <img
            className='event-detail-header-edit-picture-icon'
            src={editPictureIcon}
            onClick={handleClickOpenEditPictureModal}
          />

        </div>
      </div>

      <div className='event-detail-header-edit-content'>
        <div className='event-detail-header-edit-content-text'>



          <div className='event-detail-header-edit-input-container'>
            <label>Date de début :</label>
            <input
              className='event-detail-header-edit-form-input'
              type="date"
              name="start_date"
              value={event.start_date}
              onChange={onChange}
            />

          </div>
          <div className='event-detail-header-edit-input-container'>
            <label>Heure de début :</label>
            <input
              className='event-detail-header-edit-form-input'
              type="time"
              name="start_hour"
              value={event.start_hour}
              onChange={onChange}
            />
          </div>

          <div className='event-detail-header-edit-input-container'>
            <label>Date de fin :</label>
            <input
              className='event-detail-header-edit-form-input'
              type="date"
              name="finish_date"
              value={event.finish_date}
              onChange={onChange}
            />
          </div>
          <div className='event-detail-header-edit-input-container'>
            <label>Heure de fin :</label>
            <input
              className='event-detail-header-edit-form-input'
              type="time"
              name="finish_hour"
              value={event.finish_hour}
              onChange={onChange}
            />
          </div>
          <div className='event-detail-header-edit-input-container'>
            <label>Nom de l'événement :</label>
            <input
              className='event-detail-header-edit-form-input'
              type="text"
              id="event-title"
              name="title"
              value={event.title}
              onChange={onChange}
            />
          </div>

        </div>

        {userLogged && isEventOrganizer && (pathname === `/event/${eventId}/about`) &&
          <button
            className='event-detail-header-edit-btn'
            onClick={handleClickEditEvent}
          >
            <img src={editIcon} className='event-detail-header-edit-icon' />
            <span>Modifier</span>
          </button>}

      </div>
    </header>
  )
}
