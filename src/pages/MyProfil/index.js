/* Tools */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSport, openProfilPictureEdit, removeSport, toggleProfilEdit } from '../../store/reducers/userDetails';
import { addErrorMessage } from '../../store/reducers/error';
import { useNavigate } from 'react-router-dom';

/* Component */
import { UserSport } from '../../components/UserSport/UserSport';
import { ModalDeleteUser } from '../../components/ModalDeleteUser';
import { EditUserProfilForm } from '../../components/EditUserProfilForm';
import { ModalEditUserPicture } from '../../components/ModalEditUserPicture';

/* Api */
import { getUser } from '../../api/getUser';
import { addUserSport, deleteUserSport, getUserSport } from '../../api/userSport';
import { getUserAddress } from '../../api/userAddress.js';
import { fetchSports } from '../../api/sports';

/* Image et logo */
import editIcon from 'src/assets/icon-edit.svg';
import editPictureIcon from 'src/assets/icon-camera.svg';

/* Style */
import './styles.scss';


export const MyProfil = () => {


  const dispatch = useDispatch();

  const navigate = useNavigate();


  const user = useSelector((state) => state.userDetails.user);
  const userLogged = useSelector((state) => state.user.logged);
  const edit = useSelector((state) => state.userDetails.edit);
  const sports = useSelector((state) => state.sports.sports);
  const userPicture = useSelector((state) => state.userDetails.user.picture);
  const updatePictureDate = useSelector((state) => state.userDetails.updatePicture);

  useEffect(() => {
    if (!userLogged) {
      navigate('/')
    }

    if (userLogged) {

      dispatch(getUser());
      dispatch(getUserSport());
      dispatch(getUserAddress());
      dispatch(fetchSports());

    }

  }, [userLogged]);


  const handleClickToggleEdit = () => {
    window.scrollTo(0, 0);
    dispatch(toggleProfilEdit());
  };

  const handleChangeSportValue = (event) => {
    const newSport = user.sport.find((sport) => sport.name === event.target.value);
    if (newSport) {
      return
    }

    if (!newSport) {
      const sportToAdd = sports.find((sport) => sport.name === event.target.value)
      dispatch(addUserSport(sportToAdd.id));
      dispatch(addSport({ sport_id: sportToAdd.id, name: sportToAdd.name }));
    }

    if (user.sport.length >= 1) {
      dispatch(addErrorMessage(""));
    }
  };


  const handleClickDelete = (event) => {
    if (user.sport.length === 1) {
      dispatch(addErrorMessage("Vous devez avoir au moins un sport"))
      return
    }

    const sportToDelete = user.sport.find((sport) => sport.name === event.target.closest('.profil-user-sport-item').textContent)

    dispatch(deleteUserSport(sportToDelete.sport_id));
    const deleteUserSportToState = user.sport.filter((sport) => sport.sport_id !== sportToDelete.sport_id);
    dispatch(removeSport(deleteUserSportToState));
  };

  const errorMessage = useSelector((state) => state.error.message);

  const handleClickOpenEditPictureModal = () => {
    dispatch(openProfilPictureEdit());
  };

  return (
    <main className='profil-page'>

      <section className="profil">
        <h2 className='profil-title'>Mon Profil</h2>
        <div className='profil-content'>
          <div className='profil-user-container'>
            <div className='profil-user-picture-container'>
              <div className='profil-user-picture-wrapper'>
                <img src={`${userPicture}?key=${updatePictureDate}`} className='profil-user-picture' />
                {edit && <img src={editPictureIcon} alt="edit picture button" className='profil-user-picture-edit' onClick={handleClickOpenEditPictureModal} />}
              </div>
            </div>

          </div>
          <button className='profil-user-edit' onClick={handleClickToggleEdit}>
            <img src={editIcon} className='profil-user-edit-icon' />
            <span>Modifier</span>
          </button>
          <div className='profil-user-info'>
            <p className='profil-user-pseudo'>{user.pseudo}</p>

            <p className='profil-user-ville'>{user.address.city}</p>
            {edit && <p className='profil-user-error'>{errorMessage}</p>}
            <ul className='profil-user-sport-list'>
              {
                user.sport.map((sport) => (
                  <UserSport sport={sport} key={`sportId-${sport.sport_id}`} edit={edit} deleteSport={handleClickDelete} />))
              }

              {edit && <select className='profil-user-sport-item add' onChange={handleChangeSportValue}>
                <option key="empty" value="">Ajouter un sport</option>
                {sports.map((sport) => (
                  <option key={sport.id} value={sport.name}>{sport.name}</option>
                ))}
              </select>}
            </ul>
          </div>
          {!edit && <div className='profil-user-description'>
            <h6 className='profil-user-description-title'>Bio</h6>
            <p className='profil-user-description-text'>{user.bio}</p>
          </div>}

          {edit && <>
            <EditUserProfilForm />
          </>}

        </div>
        <ModalEditUserPicture />
        <ModalDeleteUser />

      </section>
    </main>
  );
};
