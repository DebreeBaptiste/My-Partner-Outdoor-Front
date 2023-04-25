/* Tools */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Component */
import { closeModal } from '../../store/reducers/modalDelete';

import { deleteUser } from '../../api/deleteUser';
/* Image and icon */
import userMoodSad from '../../assets/icon-mood-sad.svg';

/* Style */
import './styles.scss';

export const ModalDeleteUser = () => {

  const dispatch = useDispatch();

  const modalOpen = useSelector((state) => state.modalDelete.modalOpen);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [modalOpen]);

  const handClickModalBackdrop = (event) => {
    if (event.target.className === 'profil-modal active') {
      dispatch(closeModal());
      document.body.style.overflow = 'visible';
    }
  };

  const handleCloseModal = () => {
    document.body.style.overflow = 'visible';
    dispatch(closeModal());
  };

  const handleClickDeleteUser = () => {
    document.body.style.overflow = 'visible';
    dispatch(deleteUser());
  };

  return (
    <dialog
      className={`profil-modal ${modalOpen ? 'active' : ''}`}
      open={modalOpen}
      onClick={handClickModalBackdrop}
    >
      <div className='profil-modal-container'>
        <div className='profil-modal-text-container'>
          <div className='profil-modal-text-content'>
            <p className="profil-modal-title">Es-tu sûr de vouloir nous quitter ?</p>
            <p className="profil-modal-text">On t'aime tu sais! tu ne veux plus rester avec nous ?</p>
          </div>
          <img src={userMoodSad} className='profil-modal-icon' />
        </div>
        <div className="profil-modal-button-container">
          <button
            className="profil-modal-button profil-modal-button-stay"
            onClick={handleCloseModal}
          >Je reste
          </button>
          <button className="profil-modal-button profil-modal-button-leave" onClick={handleClickDeleteUser}>Supprimer</button>
        </div>
      </div>
    </dialog>
  );
};
