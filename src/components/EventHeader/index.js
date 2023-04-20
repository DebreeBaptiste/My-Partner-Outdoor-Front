/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { toggleEventEdit } from '../../store/reducers/eventDetails';
import { useLocation, useParams } from 'react-router-dom';

/* Component */
import { Button } from '../../components/Button';

/* Api */
import { eventUserSubscribe, eventUserUnsubscribe } from '../../api/eventUsers';

/* Image et logo */
import editIcon from 'src/assets/icon-edit.svg';

/* Style */
import './styles.scss';


export const EventHeader = ({ event, userLogged, isEventOrganizer, eventDetails }) => {

  const eventId = useParams().id

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const participants = useSelector((state) => state.eventParticipants.participants);

  const isEventParticipant = participants.some((participant) => participant.userid === parseInt(localStorage.getItem('userId'), 10));

  const handleClickEditEvent = () => {
    dispatch(toggleEventEdit());
  }

  const handleClickSubscribeEvent = () => {

    dispatch(eventUserSubscribe(eventId))
  }

  const handleClickUnsubscribeEvent = () => {
    dispatch(eventUserUnsubscribe(eventId));
  }

  const formatedStartDate = event.start_date.split('-').reverse().join('/');
  const formatedFinishDate = event.start_date.split('-').reverse().join('/');

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
            <p>{`Le ${formatedStartDate} de ${event.start_hour} à ${event.finish_hour}`}</p>}


          {event.start_date !== event.finish_date &&
            <>
              <p>{`Du ${formatedStartDate} à ${event.start_hour}`}</p>
              <p>{`Au ${formatedFinishDate} à ${event.finish_hour}`}</p>
            </>}

          <p>{event.title.toUpperCase()}</p>

        </div>

        {userLogged && !isEventOrganizer && !isEventParticipant && <Button
          className={'event-detail-header-button btn-purple'}
          children={"S'inscrire"}
          onClick={handleClickSubscribeEvent}
        />}

        {userLogged && !isEventOrganizer && isEventParticipant && <Button
          className={'event-detail-header-button btn-red'}
          children={'Se Désinscrire'}
          onClick={handleClickUnsubscribeEvent}
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
