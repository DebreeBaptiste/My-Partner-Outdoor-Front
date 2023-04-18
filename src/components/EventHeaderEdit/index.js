/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../store/reducers/notification';
import { openEventPictureEdit, toggleEventEdit } from '../../store/reducers/eventDetails';
import { useLocation, useParams } from 'react-router-dom';


/* Component */
import { Button } from '../../components/Button';

/* Image et logo */
import editIcon from 'src/assets/icon-edit.svg';
import editPictureIcon from 'src/assets/icon-camera.svg';


/* Style */
import './styles.scss';

export const EventHeaderEdit = ({ event, userLogged, isEventOrganizer, eventDetails }) => {

  const eventId = useParams().id

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleClickEditEvent = () => {
    dispatch(toggleEventEdit());
  }

  const handleClickOpenEditPictureModal = () => {
    dispatch(openEventPictureEdit());
  };

  const eventStartDateFormated = event.start_date.split('/').reverse().join('-');
  const eventFinishDateFormated = event.finish_date.split('/').reverse().join('-');

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
            <input className='event-detail-header-edit-form-input' type="date" name="start_date" value={eventStartDateFormated} ></input>
          </div>
          <div className='event-detail-header-edit-input-container'>
            <label>Heure de début :</label>
            <input className='event-detail-header-edit-form-input' type="time" name="start_hour" value={event.start_hour} ></input>
          </div>

          <div className='event-detail-header-edit-input-container'>
            <label>Date de fin :</label>
            <input className='event-detail-header-edit-form-input' type="date" name="finish_date" value={eventFinishDateFormated} ></input>
          </div>
          <div className='event-detail-header-edit-input-container'>
            <label>Heure de fin :</label>
            <input className='event-detail-header-edit-form-input' type="time" name="finish_hour" value={event.finish_hour} ></input>
          </div>
          <div className='event-detail-header-edit-input-container'>
            <label>Nom de l'événement :</label>
            <input className='event-detail-header-edit-form-input' type="text" id="event-title" name="title" value={event.title} />
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
