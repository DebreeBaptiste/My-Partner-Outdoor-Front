/* Tool */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { changeEventField } from '../../store/reducers/eventDetails';
import { openModal } from '../../store/reducers/modalDelete';

/* Component */
import { About } from '../../components/About';
import { AboutEdit } from '../../components/AboutEdit';
import { Messages } from '../../components/Messages';
import { Participants } from '../../components/Participants';
import { EventHeader } from '../../components/EventHeader';
import { EventNav } from '../../components/EventNav';
import { EventHeaderEdit } from '../../components/EventHeaderEdit';
import { ModalEditEventPicture } from '../../components/ModalEditEventPicture';
import { ModalDeleteEvent } from '../../components/ModalDeleteEvent';

/* Api */
import { editEvent, getOneEvent } from '../../api/event';

/* Style */
import './styles.scss';



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

  const handleClickDeleteEvent = (event) => {
    event.preventDefault();
    dispatch(openModal());
  };

  const handleClickCloseEdit = (event) => {
    dispatch(closeEventEdit());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangeInputValue = (event) => {
    const { name, value } = event.target;
    dispatch(changeEventField({ name, value }));
  };

  const handleSubmitEventForm = (event) => {
    event.preventDefault();
    dispatch(editEvent(eventId));
  };


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

        <form onSubmit={handleSubmitEventForm}>

          <EventHeaderEdit
            event={event}
            userLogged={userLogged}
            isEventOrganizer={isEventOrganizer}
            eventDetails={eventDetails}
            onChange={handleChangeInputValue}
          />

          <section className='event-detail-edit-section'>

            <AboutEdit
              event={event}
              onChange={handleChangeInputValue}

            />
            <div className="event-about-edit-button-container">
              <button
                type="button"
                className="event-about-edit-button event-about-edit-button-cancel"
                onClick={handleClickCloseEdit}

              >
                Annuler
              </button>
              <button
                type="submit"
                className="event-about-edit-button event-about-edit-button-submit"
              >
                Enregister
              </button>
            </div>

            <div className='event-about-edit-delete-container'>
              <button
                type="button"
                className="event-about-edit-button event-about-edit-button-delete"
                onClick={handleClickDeleteEvent}
              >
                Supprimer l'évênement
              </button>
            </div>

          </section>
        </form>


        <ModalEditEventPicture />
        <ModalDeleteEvent />
      </>
      }




    </main>
  );
}
