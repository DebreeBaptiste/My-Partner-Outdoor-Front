import PropTypes from 'prop-types';
import deleteIcon from '../../assets/icon-delete-sport.svg';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../api/eventMessages';

export const Message = ({ message }) => {

  const participantId = parseInt(localStorage.getItem('userId'), 10);

  const dispatch = useDispatch();

  const handleClickDeleteMessage = () => {
    dispatch(deleteMessage(message.eventid, message.messageid));
  }

  return (
    <div className='event-chat-message'>
      <img src={message.picture} className='event-chat-message-avatar' />

      <div className="event-chat-message-content">
        <p className='event-chat-message-content-author'>{message.pseudo}</p>
        <p className='event-chat-message-content-text'>{message.content}
          {message.userid === participantId &&
            <span className='event-chat-message-content-text-delete' onClick={handleClickDeleteMessage}>
              <img src={deleteIcon} className='event-chat-message-content-text-delete-icon' />
            </span>}
        </p>
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
