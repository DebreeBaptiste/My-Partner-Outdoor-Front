/* Tools */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeProfilPictureEdit } from '../../store/reducers/userDetails';

/* Style */
import './styles.scss';
import { editUserPicture } from '../../api/editUser';

export const ModalEditUserPicture = () => {

  const dispatch = useDispatch();

  const editModalOpen = useSelector((state) => state.userDetails.editPictureModal);

  useEffect(() => {
    if (editModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [editModalOpen]);

  const handClickModalBackdrop = (event) => {
    if (event.target.className === 'profil-picture-modal edit-open') {
      dispatch(closeProfilPictureEdit());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeProfilPictureEdit());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = document.getElementById('profil-picture').files[0];
    formData.append('picture', file);
    dispatch(editUserPicture(formData));
  };

  return (
    <dialog
      className={`profil-picture-modal ${editModalOpen ? 'edit-open' : ''}`}
      open={editModalOpen}
      onClick={handClickModalBackdrop}
    >
      <div className='profil-picture-modal-container'>
        <div className='profil-picture-modal-text-container'>
          <p className="profil-picture-modal-title">Ajouter votre photo</p>
        </div>

        <form>
          <div className="profil-picture-modal-input-container">
            <input
              className="profil-picture-modal-input"
              type="file"
              name="picture"
              id="profil-picture"
              accept="image/png, image/jpeg"
            />
          </div>

          <div className="profil-picture-modal-button-container">
            <button
              className="profil-picture-modal-button profil-picture-modal-button-cancel"
              onClick={handleCloseModal}
            >Annuler
            </button>
            <button type="submit" className="profil-picture-modal-button profil-picture-modal-button-add" onClick={handleSubmit}>Ajouter</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
