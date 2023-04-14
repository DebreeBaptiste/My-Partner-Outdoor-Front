import deleteIcon from '../../assets/icon-delete-sport.svg';

/* Style */
import './styles.scss';

export const UserSport = ({ sport, edit, deleteSport }) => {
  return (
    <li className={`profil-user-sport-item sport-${sport.sport_id}`}>{sport.name}

      {edit && <span className='profil-user-sport-item-delete' onClick={deleteSport}>
        <img src={deleteIcon} className='profil-user-sport-item-delete-icon' />
      </span>}
    </li>
  );
};
