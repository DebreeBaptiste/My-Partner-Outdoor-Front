/* Tools */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeProfilPictureEdit } from '../../store/reducers/userDetails';

/* Style */
import './styles.scss';
import { closeEventPictureEdit } from '../../store/reducers/eventDetails';
import { editEventPicture } from '../../api/event';


export const ModalEditEventPicture = () => {

  const dispatch = useDispatch();

  const editModalOpen = useSelector((state) => state.eventDetails.editPictureModal);

  useEffect(() => {
    if (editModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [editModalOpen]);

  const handClickModalBackdrop = (event) => {
    if (event.target.className === 'event-picture-modal edit-open') {
      dispatch(closeEventPictureEdit());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeEventPictureEdit());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = document.getElementById('event-picture').files[0];
    formData.append('picture', file);
    dispatch(editEventPicture(formData));
  };

  return (
    <dialog
      className={`event-picture-modal ${editModalOpen ? 'edit-open' : ''}`}
      open={editModalOpen}
      onClick={handClickModalBackdrop}
    >
      <div className='event-picture-modal-container'>
        <div className='event-picture-modal-text-container'>
          <p className="event-picture-modal-title">Ajouter votre photo</p>
        </div>

        <form>
          <div className="event-picture-modal-input-container">
            <input
              className="event-picture-modal-input"
              type="file"
              name="picture"
              id="event-picture"
              accept="image/png, image/jpeg"
            />
          </div>

          <div className="event-picture-modal-button-container">
            <button
              type="button"
              className="event-picture-modal-button event-picture-modal-button-cancel"
              onClick={handleCloseModal}
            >Annuler
            </button>
            <button type="submit" className="event-picture-modal-button event-picture-modal-button-add" onClick={handleSubmit}>Ajouter</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
