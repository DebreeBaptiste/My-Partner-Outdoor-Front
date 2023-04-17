import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage, createNewMessage } from '../../store/reducers/messages';

/* Component */
import { Message } from './message';

/* Api */
import { getEventMessages, postNewMessage } from '../../api/eventMessages';

/* image */
import buttonIcon from 'src/assets/icon-cheveron-right-circle.svg';


/* Style */
import './styles.scss';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/getUser';

export const Messages = () => {

  const newMessage = useSelector((state) => state.messages.newMessage);
  const messages = useSelector((state) => state.messages.messages);

  const user = useSelector((state) => state.userDetails.user);

  const dispatch = useDispatch()

  const eventId = useParams().id;

  const chatMessagesRef = useRef(null)


  useEffect(() => {
    dispatch(getEventMessages(eventId));
    dispatch(getUser());
  }, []);

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
    dispatch(addNewMessage({ content: newMessage, pseudo: user.pseudo, picture: user.picture }));
    dispatch(createNewMessage(''));
  };


  useEffect(() => {
    if (chatMessagesRef) {
      chatMessagesRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [messages])

  return (
    <section className='event-chat'>
      <div className='event-chat-messages' ref={chatMessagesRef}>

        {messages.map((message, index) => <Message message={message} key={index} />)}

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
