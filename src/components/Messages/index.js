import { useEffect, useRef, useState } from 'react';
import { Message } from './message';

/* image */
import avatar from 'src/assets/resource/fake-avatar.png';
import buttonIcon from 'src/assets/icon-cheveron-right-circle.svg';


/* Style */
import './styles.scss';

export const Messages = () => {
  const [messages, setMessages] = useState([
    { message: 'RDV à 11 h petante, pas de retard svp', author: 'Axel', avatar },
    { message: 'J’ai oublier mon ballon de foot, tu en as un toi ', author: 'John', avatar },
    { message: 'J’ai oublier mon ballon de foot, tu en as un toi ', author: 'Olivier', avatar },
    { message: 'Ah non c’est bon enfaite, pas de probleme', author: 'Olivier', avatar },
    { message: 'Je vais annuler enfaite', author: 'Edward', avatar },

  ]);
  const [message, setMessage] = useState('');

  const chatMessagesRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message === '') {
      return;
    }
    setMessages([...messages, { message, author: 'Axel', avatar }]);
    setMessage('');

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
          <input className="event-chat-form-input" type='text' placeholder='Votre message' value={message} onChange={(event) => setMessage(event.target.value)} />
          <button className="event-chat-form-button" type='submit'><img src={buttonIcon} className="event-chat-form-button-icon" /></button>
        </form>
      </div>

    </section>
  );
}
