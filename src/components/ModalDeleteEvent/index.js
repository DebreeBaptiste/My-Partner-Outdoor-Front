/* Tools */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Component */
import { closeModal } from '../../store/reducers/modalDelete';

/* Api */
import { deleteEvent } from '../../api/event';

/* Style */
import './styles.scss';
import { useNavigate } from 'react-router-dom';

export const ModalDeleteEvent = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const modalOpen = useSelector((state) => state.modalDelete.modalOpen);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [modalOpen]);

  const handClickModalBackdrop = (event) => {
    if (event.target.className === 'event-delete-modal delete-modal-active') {
      dispatch(closeModal());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickDeleteEvent = () => {
    dispatch(deleteEvent(navigate));
  };

  return (
    <dialog
      className={`event-delete-modal ${modalOpen ? 'delete-modal-active' : ''}`}
      open={modalOpen}
      onClick={handClickModalBackdrop}
    >
      <div className='event-delete-modal-container'>

        <p className="event-delete-modal-title">Es-tu sûr de vouloir supprimer l'évênement ?</p>


        <div className="event-delete-modal-button-container">
          <button
            type="button"
            className="event-delete-modal-button event-delete-modal-button-cancel"
            onClick={handleCloseModal}
          >Annuler
          </button>
          <button className="event-delete-modal-button event-delete-modal-button-delete" onClick={handleClickDeleteEvent} >Supprimer</button>
        </div>
      </div>
    </dialog>
  );
};
