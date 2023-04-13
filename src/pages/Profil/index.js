/* Tools */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSport, openProfilEdit, removeSport } from '../../store/reducers/userDetails';
import { addErrorMessage } from '../../store/reducers/error';
import { useNavigate } from 'react-router-dom';

/* Component */
import { UserSport } from '../../components/UserSport/UserSport';

import { ModalDeleteUser } from '../../components/ModalDeleteUser';


/* Api */
import { getUser } from '../../api/getUser';
import { getUserSport } from '../../api/getUserSports';
import { getUserAddress } from '../../api/userAddress.js';

/* Image et logo */
import userPicture from 'src/assets/resource/fake-avatar.png';
import editIcon from 'src/assets/icon-edit.svg';



/* Style */
import './styles.scss';
import { EditUserProfilForm } from '../../components/EditUserProfilForm';


export const Profil = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const user = useSelector((state) => state.userDetails.user);
  const userLogged = useSelector((state) => state.user.logged);
  const edit = useSelector((state) => state.userDetails.edit);

  useEffect(() => {
    if (!userLogged) {
      navigate('/')
    }
    if (userLogged) {

      dispatch(getUser());
      dispatch(getUserSport());
      dispatch(getUserAddress());

    }

  }, [userLogged]);


  const handleClickEdit = () => {
    window.scrollTo(0, 0);
    dispatch(openProfilEdit());
  };

  const handleChangeSportValue = (event) => {
    const newSport = user.sport.includes(event.target.value);
    if (newSport) {
      return
    }

    if (!newSport) {
      dispatch(addSport(event.target.value));
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

    dispatch(removeSport(event.target.closest('.profil-user-sport-item').textContent));
  };



  const errorMessage = useSelector((state) => state.error.message);

  return (
    <section className="profil">
      <h2 className='profil-title'>Mon Profil</h2>
      <div className='profil-content'>
        <div className='profil-user-container'>
          <div className='profil-user-picture-name-container'>
            <img src={userPicture} className='profil-user-picture' />
          </div>

        </div>
        {!edit && <button className='profil-user-edit' onClick={handleClickEdit}>
          <img src={editIcon} className='profil-user-edit-icon' />
          <span>Modifier</span>
        </button>}
        <div className='profil-user-info'>
          <p className='profil-user-pseudo'>{user.pseudo}</p>

          <p className='profil-user-ville'>{user.address.city}</p>
          <p className='profil-user-error'>{errorMessage}</p>
          <ul className='profil-user-sport-list'>
            {
              user.sport.map((sport) => (
                <UserSport sport={sport} key={sport} edit={edit} deleteSport={handleClickDelete} />))
            }

            {edit && <select className='profil-user-sport-item add' onChange={handleChangeSportValue}>
              <option value="">Ajouter un sport</option>
              <option value="Randonnée">Randonnée</option>
              <option value="Course-à-pied">Course à pied</option>
              <option value="Trail">Trail</option>
              <option value="Triathlon">Triathlon</option>
              <option value="VTT">VTT</option>
              <option value="Cyclisme">Cyclisme</option>
              <option value="Football">Football</option>
              <option value="Handball">Handball</option>
              <option value="Basket-ball">Basket-ball</option>
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

      <ModalDeleteUser />

    </section>
  );
};
