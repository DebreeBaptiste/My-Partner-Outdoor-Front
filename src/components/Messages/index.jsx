import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage, createNewMessage } from '../../store/reducers/messages';

/* Component */
import { Message } from './message';

/* Api */
import { getEventMessages, postNewMessage } from '../../api/eventMessages';

/* image */
import buttonIcon from '../../assets/icon-cheveron-right-circle.svg';


/* Style */
import './styles.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../../api/getUser';

export const Messages = ({ userLogged }) => {

  const newMessage = useSelector((state) => state.messages.newMessage);
  const messages = useSelector((state) => state.messages.messages);

  const participants = useSelector((state) => state.eventParticipants.participants);

  const isEventParticipant = participants.some((participant) => participant.userid === parseInt(localStorage.getItem('userId'), 10));

  const user = useSelector((state) => state.userDetails.user);

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const eventId = useParams().id;

  const chatMessagesRef = useRef(null)

  const { pathname } = useLocation();

  const userId = parseInt(localStorage.getItem('userId'), 10);


  useEffect(() => {

    if (!userLogged || !isEventParticipant) {
      navigate(`/event/${eventId}/about`);
    }

    dispatch(getEventMessages(eventId));
    dispatch(getUser(userId));
  }, [isEventParticipant, pathname]);

  const handleChangeValue = (event) => {
    const { value } = event.target;
    dispatch(createNewMessage(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage === '') {
      return;
    }
    dispatch(postNewMessage(eventId));
    dispatch(createNewMessage(''));
  };


  useEffect(() => {
    if (chatMessagesRef) {
      chatMessagesRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [messages, pathname])


  return (
    <section className='event-chat'>
      <div className='event-chat-messages' ref={chatMessagesRef}>

        {messages.map((message) => <Message message={message} key={message.messageid} />).reverse()}

      </div>

      <hr className="event-chat-divider" />
      <div className='event-chat-form'>
        <form className='event-chat-form' onSubmit={handleSubmit}>
          <input className="event-chat-form-input" type='text' placeholder='Votre message' value={newMessage} onChange={handleChangeValue} />
          <button className="event-chat-form-button" type='submit'><img src={buttonIcon} className="event-chat-form-button-icon" /></button>
        </form>
      </div>

    </section>
  );
}
