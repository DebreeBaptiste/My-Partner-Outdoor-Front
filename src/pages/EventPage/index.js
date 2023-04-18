/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

/* Component */
import { About } from '../../components/About';
import { AboutEdit } from '../../components/AboutEdit';
import { Messages } from '../../components/Messages';
import { Participants } from '../../components/Participants';
import { EventHeader } from '../../components/EventHeader';
import { EventNav } from '../../components/EventNav';
import { EventHeaderEdit } from '../../components/EventHeaderEdit';
import { ModalEditEventPicture } from '../../components/ModalEditEventPicture';

/* Api */
import { getOneEvent } from '../../api/event';




/* Style */
import './styles.scss';
import { ModalDeleteEvent } from '../../components/ModalDeleteEvent';



export const EventPage = () => {

  const eventId = useParams().id

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneEvent(eventId));
  }, []);


  const userLogged = useSelector((state) => state.user.logged);
  const event = useSelector((state) => state.eventDetails.event);
  const eventDetails = useSelector((state) => state.eventDetails);
  const edit = useSelector((state) => state.eventDetails.edit);

  const isEventOrganizer = parseInt(localStorage.getItem('userId'), 10) === event.organizer_id;


  if (!userLogged && pathname === `/event/${eventId}/messages`) {
    return < Navigate to={`/event/${eventId}`} />
  }


  return (
    <main className='event-detail'>

      {!edit && <>

        <EventHeader event={event} userLogged={userLogged} isEventOrganizer={isEventOrganizer} eventDetails={eventDetails} />
        <EventNav userLogged={userLogged} />

        <section className='event-detail-section'>

          {(userLogged && pathname === `/event/${eventId}/messages`) && <Messages />}
          {pathname === `/event/${eventId}/participants` && <Participants />}
          {pathname === `/event/${eventId}/about` && <About />}


        </section>
      </>
      }


      {edit && <>

        <form>

          <EventHeaderEdit event={event} userLogged={userLogged} isEventOrganizer={isEventOrganizer} eventDetails={eventDetails} />
          <section className='event-detail-section'>

            <AboutEdit event={event} />

          </section>
        </form>


        <ModalEditEventPicture />
        <ModalDeleteEvent />
      </>
      }




    </main>
  );
}
