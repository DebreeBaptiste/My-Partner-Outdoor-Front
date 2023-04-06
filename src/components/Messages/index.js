import { useEffect, useRef, useState } from 'react';
import { Message } from './message';

/* image */
import avatar from 'src/assets/resource/fake-avatar.png';
import buttonIcon from 'src/assets/icon-cheveron-right-circle.svg';


/* Style */
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage, createNewMessage } from '../../store/reducers/messages';

export const Messages = () => {

  const newMessage = useSelector((state) => state.messages.newMessage);
  const messages = useSelector((state) => state.messages.messages);

  const user = useSelector((state) => state.user.userDetails);


  const dispatch = useDispatch()

  const chatMessagesRef = useRef(null)

  const handleChangeValue = (event) => {
    const { value } = event.target;
    dispatch(createNewMessage(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage === '') {
      return;
    }
    dispatch(addNewMessage({ message: newMessage, user: user.pseudo, picture: user.picture }));
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
