import { addSport, closeProfilEdit, openProfilEdit, removeSport, updateUserAddress, updateUserField } from '../../store/reducers/userDetails';
import { editUser } from '../../api/editUser';
import { openModal } from '../../store/reducers/modalDelete';
import { deleteUserAddress, getUserAddress } from '../../api/userAddress.js';


/* Image et logo */
import userInfo from 'src/assets/icon-user.svg';
import userBirthday from 'src/assets/icon-calendar.svg';
import userLocation from 'src/assets/icon-location-pin.svg';
import userEmail from 'src/assets/icon-at.svg';
import userAddressTrash from 'src/assets/icon-trash.svg';

/* Style */
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';


export const EditUserProfilForm = () => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userDetails.user);

  const hasAddress = user.address && Object.values(user.address).every(value => value !== '');

  const handleChangeValue = (event) => {
    const { value, name } = event.target;
    dispatch(updateUserField({ value, name }));
  };

  const handleChangeAddressValue = (event) => {
    const { value, name } = event.target;
    dispatch(updateUserAddress({ value, name }));
  };

  const handleSubmitUserForm = (event) => {
    event.preventDefault();
    dispatch(editUser());
  };

  const handleClickDeleteUser = () => {
    dispatch(openModal());
  }

  const handleClickDeleteAddress = () => {
    dispatch(deleteUserAddress());
  }

  const handleClickCloseEdit = () => {
    window.scrollTo(0, 0);
    dispatch(closeProfilEdit());
  };


  return (
    <>
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
            value={user.bio || ''}
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
              value={user.firstname || ''}
              onChange={handleChangeValue}
            />


            <label htmlFor="user-lastname"></label>
            <input
              type="text"
              name="lastname"
              id="user-lastname"
              placeholder="Nom"
              className="profil-user-form-input"
              value={user.lastname || ''}
              onChange={handleChangeValue}
            />



            <label htmlFor="user-pseudo"></label>
            <input
              type="text"
              name="pseudo"
              id="user-pseudo"
              placeholder="Pseudo"
              className="profil-user-form-input"
              value={user.pseudo || ''}
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
              value={user.birthday || ''}
              onChange={handleChangeValue}
            />
          </div>
        </div>

        <hr className='profil-user-form-divider' />

        <div className="profil-user-form-address-container" >
          <img src={userLocation} className="profil-user-form-icon" />
          {hasAddress && <>

            <p className="profil-user-form-address">
              {`${user.address.number} - ${user.address.street} ${user.address.zip_code} ${user.address.city}`}

            </p>
            <img src={userAddressTrash} className="profil-user-form-address-edit-icon" onClick={handleClickDeleteAddress} />
          </>}
          {!hasAddress && <div className="profil-user-form-input-container">
            <label htmlFor="user-street-number"></label>
            <input
              type="text"
              name="number"
              id="user-street-number"
              placeholder="Numéro"
              className="profil-user-form-input"
              value={user.address.number || ''}
              onChange={handleChangeAddressValue}
            />
            <label htmlFor="user-street"></label>
            <input
              type="text"
              name="street"
              id="user-street"
              placeholder="Nom de la rue"
              className="profil-user-form-input"
              value={user.address.street || ''}
              onChange={handleChangeAddressValue}
            />


            <label htmlFor="user-zip_code"></label>
            <input
              type="text"
              name="zip_code"
              id="user-zip_code"
              placeholder="Code postal"
              className="profil-user-form-input"
              value={user.address.zip_code || ''}
              onChange={handleChangeAddressValue}
            />



            <label htmlFor="user-city"></label>
            <input
              type="text"
              name="city"
              id="user-city"
              placeholder="Ville"
              className="profil-user-form-input"
              value={user.address.city || ''}
              onChange={handleChangeAddressValue}
            />
          </div>}
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
              value={user.email || ''}
              onChange={handleChangeValue}
            />
          </div>
        </div>

        <hr className='profil-user-form-divider' />

        <div className="profil-user-form-button-container">
          <button
            type="button"

            className="profil-user-form-button profil-user-form-button-cancel"
            onClick={handleClickCloseEdit}
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

      <div className='profil-user-form-delete-container'>
        <button
          type="submit"
          className="profil-user-form-button profil-user-form-button-delete"
          onClick={handleClickDeleteUser}
        >
          Supprimer le compte
        </button>
      </div>
    </>
  )
}
