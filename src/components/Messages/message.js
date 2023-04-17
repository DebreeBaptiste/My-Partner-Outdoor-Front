import PropTypes from 'prop-types';


export const Message = ({ message }) => {
  return (
    <div className='event-chat-message'>
      <img src={message.picture} className='event-chat-message-avatar' />

      <div className="event-chat-message-content">
        <p className='event-chat-message-content-author'>{message.pseudo}</p>
        <p className='event-chat-message-content-text'>{message.content}</p>
      </div>

    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string,
    pseudo: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,

}
