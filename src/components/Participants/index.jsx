import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

/* Api */
import { getEventUsers } from '../../api/eventUsers';

/* Style */
import './styles.scss';
import { sendNotification } from '../../store/reducers/notification';

export const Participants = () => {

  const eventId = useParams().id

  const dispatch = useDispatch();

  const eventParticipants = useSelector((state) => state.eventParticipants.participants);
  const eventOrganizerId = useSelector((state) => state.eventDetails.event.organizer_id);
  const userLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    dispatch(getEventUsers(eventId));
  }, []);

  const handleClickParticipant = () => {
    dispatch(sendNotification('Connexion requise pour consulter le profil'));
  }

  return (
    <section className="event-participants">
      {eventParticipants.map((participant) => (
        <div
          className={`event-participants-content 
          ${eventOrganizerId === participant.userid ? "event-participants-content-organizer" : ""}`
          }
          key={participant.userid}>

          {userLogged && <Link to={`/profil/${participant.userid}`} className='event-participants-wrapper'>
            <img src={participant.picture} className={`event-participants-avatar 
          ${eventOrganizerId === participant.userid ? "event-participants-organizer" : ""}`}
            />
            <p className='event-participants-name'>{participant.pseudo}</p>
          </Link>}

          {!userLogged && <div onClick={handleClickParticipant} className='event-participants-wrapper'>
            <img src={participant.picture} 
            className={`event-participants-avatar 
            ${eventOrganizerId === participant.userid ? "event-participants-organizer" : ""}`}/>
            <p className='event-participants-name'>{participant.pseudo}</p>
          </div>}


        </div>
      ))}

    </section>
  );
}
