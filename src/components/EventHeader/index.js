/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../store/reducers/notification';
import { toggleEventEdit } from '../../store/reducers/eventDetails';
import { useLocation, useParams } from 'react-router-dom';


/* Component */
import { Button } from '../../components/Button';

/* Image et logo */
import editIcon from 'src/assets/icon-edit.svg';


/* Style */
import './styles.scss';

export const EventHeader = ({ event, userLogged, isEventOrganizer, eventDetails }) => {

  const eventId = useParams().id

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const notificationOpen = useSelector((state) => state.notification.open);

  const handleClickEditEvent = () => {
    dispatch(toggleEventEdit());
  }

  const handleClickParticipateNotification = () => {
    if (notificationOpen) {
      return
    }
    dispatch(sendNotification("Vous participez à l'évênement"));
  }

  return (
    <header className="event-detail-header">
      <div className="event-detail-header-picture-container">
        <div className="event-detail-header-picture-wrapper">
          <img
            className='event-detail-header-picture'
            src={`${event.picture}?key=${eventDetails.updatePicture}`}
            alt='picture of people doing outdoor activity'
          />
        </div>

      </div>

      <div className='event-detail-header-content'>
        <div className='event-detail-header-content-text'>

          {event.start_date === event.finish_date &&
            <p>{`Le ${event.start_date} de ${event.start_hour} à ${event.finish_hour}`}</p>}


          {event.start_date !== event.finish_date &&
            <>
              <p>{`Du ${event.start_date} à ${event.start_hour}`}</p>
              <p>{`Au ${event.finish_date} à ${event.finish_hour}`}</p>
            </>}

          <p>{event.title.toUpperCase()}</p>

        </div>

        {userLogged && !isEventOrganizer && <Button
          className={'event-detail-header-button btn-purple'}
          children={'Je participe'}
          onClick={handleClickParticipateNotification}
        />}


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
