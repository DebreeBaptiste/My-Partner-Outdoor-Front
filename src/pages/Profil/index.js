/* Tools */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSport, removeSport, updateUserAddress, updateUserField } from '../../store/reducers/userDetails';
import { addErrorMessage } from '../../store/reducers/error';

/* Component */
import { UserSport } from './UserSport';

/* Api */
import { getUser } from '../../api/getUser';
import { getUserSport } from '../../api/getUserSports';
import { getUserAddress } from '../../api/getUserAddress.js';

/* Image et logo */
import userPicture from 'src/assets/resource/fake-avatar.png';
import editIcon from 'src/assets/icon-edit.svg';
import userInfo from 'src/assets/icon-user.svg';
import userBirthday from 'src/assets/icon-calendar.svg';
import userLocation from 'src/assets/icon-location-pin.svg';
import userEmail from 'src/assets/icon-at.svg';

/* Style */
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../api/editUser';

export const Profil = () => {



  const dispatch = useDispatch();

  const navigate = useNavigate()

  const user = useSelector((state) => state.userDetails.user);
  const userLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (!userLogged) {
      navigate('/')
    }

    dispatch(getUser());
    dispatch(getUserSport());
    dispatch(getUserAddress());

  }, []);

  const [edit, setEdit] = useState(false);

  const handleClickEdit = () => {
    window.scrollTo(0, 0);
    setEdit((prevState) => !prevState);
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

  const handleChangeValue = (event) => {
    const { value, name } = event.target;
    dispatch(updateUserField({ value, name }));
  };

  const handleChangeAddressValue = (event) => {
    const { value, name } = event.target;
    dispatch(updateUserAddress({ value, name }));
  };

  const handleClickDelete = (event) => {
    if (user.sport.length === 1) {
      dispatch(addErrorMessage("Vous devez avoir au moins un sport"))
      return
    }

    dispatch(removeSport(event.target.closest('.profil-user-sport-item').textContent));
  };

  const handleSubmitUserForm = (event) => {
    event.preventDefault();
    dispatch(editUser(setEdit));
  };

  const errorMessage = useSelector((state) => state.error.message);

  return (
    <section className="profil">
      <h2 className='profil-title'>Mon Profil</h2>
      <div className='profil-content'>
        <div className='profil-user-container'>
          <div className='profil-user-picture-name-container'>
            <img src={userPicture} className='profil-user-picture' />
            <p className='profil-user-pseudo'>{user.pseudo}</p>
          </div>

          {!edit && <button className='profil-user-edit' onClick={handleClickEdit}>
            <img src={editIcon} className='profil-user-edit-icon' />
            <span>Modifier</span>
          </button>}
        </div>
        <div className='profil-user-info'>
          <p className='profil-user-age'>28 ans</p>
          <p className='profil-user-ville'>{user.address.city}</p>
        </div>
        <p className='profil-user-error'>{errorMessage}</p>
        <ul className='profil-user-sport-list'>
          {
            user.sport.map((sport, index) => (
              <UserSport sport={sport} key={index} edit={edit} deleteSport={handleClickDelete} />))
          }

          {edit && <select className='profil-user-sport-item add' onChange={handleChangeSportValue}>
            <option value="">Ajouter un sport</option>
            <option value="BasketBall">BasketBall</option>
            <option value="FootBall">FootBall</option>
            <option value="VolleyBall">VolleyBall</option>
            <option value="Kitesurf">Kitesurf</option>
            <option value="Kayak">Kayak</option>
            <option value="Fitness">Fitness</option>
            <option value="Tennis">Tennis</option>

          </select>}
        </ul>
        {!edit && <div className='profil-user-description'>
          <h6 className='profil-user-description-title'>Bio</h6>
          <p className='profil-user-description-text'>{user.bio}</p>
        </div>}

        {edit && <>
          <form
            action=""
            className="profil-user-form"
            onSubmit={handleSubmitUserForm}

          >
            <div className='profil-user-form-bio-container'>
              <label htmlFor='user-bio'>Bio</label>
              <textarea
                id='user-bio'
                name='bio'
                value={user.bio}
                onChange={handleChangeValue}
                placeholder='Bio'
                className='profil-user-form-bio'
              />
            </div>

            <div className="profil-user-form-info-container" >
              <img src={userInfo} className="profil-user-form-icon" />
              <div className="profil-user-form-input-container">
                <label htmlFor="user-firstname"></label>
                <input
                  type="text"
                  name="firstname"
                  id="user-firstname"
                  placeholder="Prénom"
                  className="profil-user-form-input"
                  value={user.firstname}
                  onChange={handleChangeValue}
                />


                <label htmlFor="user-lastname"></label>
                <input
                  type="text"
                  name="lastname"
                  id="user-lastname"
                  placeholder="Nom"
                  className="profil-user-form-input"
                  value={user.lastname}
                  onChange={handleChangeValue}
                />



                <label htmlFor="user-pseudo"></label>
                <input
                  type="text"
                  name="pseudo"
                  id="user-pseudo"
                  placeholder="Pseudo"
                  className="profil-user-form-input"
                  value={user.pseudo}
                  onChange={handleChangeValue}
                />
              </div>
            </div>

            <div className="profil-user-form-birthday-container">
              <img src={userBirthday} className="profil-user-form-icon" />
              <div className="profil-user-form-input-container">
                <label htmlFor="user-birthday"></label>
                <input
                  type="text"
                  name="birthday"
                  id="user-birthday"
                  placeholder="Date de naissance"
                  className="profil-user-form-input"
                  value={user.birthday}
                  onChange={handleChangeValue}
                />
              </div>
            </div>

            <hr className='profil-user-form-divider' />

            <div className="profil-user-form-info-container" >
              <img src={userLocation} className="profil-user-form-icon" />
              <div className="profil-user-form-input-container">
                <label htmlFor="user-street-number"></label>
                <input
                  type="text"
                  name="number"
                  id="user-street-number"
                  placeholder="Numéro"
                  className="profil-user-form-input"
                  value={user.address.number}
                  onChange={handleChangeAddressValue}
                />
                <label htmlFor="user-street"></label>
                <input
                  type="text"
                  name="street"
                  id="user-street"
                  placeholder="Nom de la rue"
                  className="profil-user-form-input"
                  value={user.address.street}
                  onChange={handleChangeAddressValue}
                />


                <label htmlFor="user-zip_code"></label>
                <input
                  type="text"
                  name="zip_code"
                  id="user-zip_code"
                  placeholder="Code postal"
                  className="profil-user-form-input"
                  value={user.address.zip_code}
                  onChange={handleChangeAddressValue}
                />



                <label htmlFor="user-city"></label>
                <input
                  type="text"
                  name="city"
                  id="user-city"
                  placeholder="Ville"
                  className="profil-user-form-input"
                  value={user.address.city}
                  onChange={handleChangeAddressValue}
                />
              </div>
            </div>

            <hr className='profil-user-form-divider' />


            <div className="profil-user-form-email-container">
              <img src={userEmail} className="profil-user-form-icon" />
              <div className="profil-user-form-input-container">
                <label htmlFor="user-email"></label>
                <input
                  type="email"
                  name="email"
                  id="user-email"
                  placeholder="Email"
                  className="profil-user-form-input"
                  value={user.email}
                  onChange={handleChangeValue}
                />
              </div>
            </div>

            <hr className='profil-user-form-divider' />

            <div className="profil-user-form-button-container">
              <button
                type="button"

                className="profil-user-form-button profil-user-form-button-cancel"
                onClick={handleClickEdit}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="profil-user-form-button profil-user-form-button-submit"
              >
                Enregister
              </button>
            </div>
          </form>

          <button
            type="submit"
            className="profil-user-form-button profil-user-form-button-delete"
          >
            Supprimer le compte
          </button>
        </>}

      </div>
      <dialog >
        <div className="dialog-container">
          <h2 className="dialog-title">Supprimer le compte</h2>
          <p className="dialog-text">Êtes-vous sûr de vouloir supprimer votre compte ?</p>
          <div className="dialog-button-container">
            <button className="dialog-button dialog-button-cancel">Annuler</button>
            <button className="dialog-button dialog-button-delete">Supprimer</button>
          </div>
        </div>
      </dialog>
    </section>
  );
};
