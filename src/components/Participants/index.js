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

  const eventUsers = useSelector((state) => state.eventParticipant.participants);
  const eventOrganizerId = useSelector((state) => state.eventDetails.event.organizer_id);

  useEffect(() => {
    dispatch(getEventUsers(eventId));
  }, []);



  return (
    <section className="event-participants">
      {eventUsers.map((user) => (
        <div
          className={`event-participants-content 
          ${eventOrganizerId === user.userid ? "event-participants-content-organizer" : ""}`
          }
          key={user.userid}>

          <Link to={`/profil/${user.userid}`}>
            <img src={user.picture} className={`event-participants-avatar 
          ${eventOrganizerId === user.userid ? "event-participants-organizer" : ""}`}
            />
          </Link>

          <p className='event-participants-name'>{user.pseudo}</p>

        </div>
      ))}

    </section>
  );
}
