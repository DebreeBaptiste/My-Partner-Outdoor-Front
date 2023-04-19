import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

/* Api */
import { getEventUsers } from '../../api/eventUsers';

/* Style */
import './styles.scss';

export const Participants = () => {

  const eventId = useParams().id

  const dispatch = useDispatch();

  const eventParticipants = useSelector((state) => state.eventParticipants.participants);
  const eventOrganizerId = useSelector((state) => state.eventDetails.event.organizer_id);

  useEffect(() => {
    dispatch(getEventUsers(eventId));
  }, []);

  return (
    <section className="event-participants">
      {eventParticipants.map((participant) => (
        <div
          className={`event-participants-content 
          ${eventOrganizerId === participant.userid ? "event-participants-content-organizer" : ""}`
          }
          key={participant.userid}>

          <Link to={`/profil/${participant.userid}`}>
            <img src={participant.picture} className={`event-participants-avatar 
          ${eventOrganizerId === participant.userid ? "event-participants-organizer" : ""}`}
            />
          </Link>

          <p className='event-participants-name'>{participant.pseudo}</p>

        </div>
      ))}

    </section>
  );
}
