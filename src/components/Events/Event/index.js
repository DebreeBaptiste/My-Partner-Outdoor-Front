//  Import
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



// == Import
import './styles.scss';

function Event({
  id,
  title,
  nb_participant,
  price,
  picture,
  organizer_id,
  number,
  street,
  zip_code,
  city,
  sport,
  sport_id,

}) {

  const userId = parseInt(localStorage.getItem('userId'), 10);


  const userLogged = useSelector((state) => state.user.logged);



  const isOrganizer = organizer_id === userId;


  return (
    <div className='event'>

      <img className='event__image' src={picture} alt='event' />

      <div className='event__detail'>
        <div className='event__detail__up'>
          <h5 className='event__detail__up__title'>{title}</h5>
          <div className='event__detail__up__info'>
            <div className='event__detail__up__info__place' >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="event__detail__up__info__place__iconlocationpin"><path className="event__detail__up__info__place__iconlocationpin__primary" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path className="event__detail__up__info__place__iconlocationpin__secondary" d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z" /></svg>

              <p className='event__detail__up__info__place__text'>{number} {street}, {zip_code}, {city}</p>
            </div>
            <div className='event__detail__up__info__participants'>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="event__detail__up__info__participants__iconusercouple">
                <path
                  className="event__detail__up__info__participants__iconusercouple__primary"
                  d="M15 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7 8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                <path className="event__detail__up__info__participants__iconusercouple__secondary"
                  d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7 8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
              </svg>
              <p className='event__detail__up__info__place__text'>{nb_participant} participants maximum</p>
            </div>
            <span className={`event__detail__up__info__place__sport sport-${sport_id}`}>{sport}</span>
          </div>
        </div>

        <div className='event__detail__down'>
          <div className='event__detail__down__priceButton'>
            <div className='event__detail__down__priceButton__price'>
              <p className='event__detail__down__priceButton__price__number'>{price}€</p>
              <p className='event__detail__down__priceButton__price__text'>par personne</p>

            </div>
            {!userLogged && <button type="button" className='event__detail__down__priceButton__button'><Link to="/register">Inscription</Link></button>}
            {isOrganizer && <button type="button" className='event__detail__down__priceButton__button'><Link to={`/event/${id}/about`}>Modifier</Link></button>}
            {userLogged && !isOrganizer && <button type="button" className='event__detail__down__priceButton__button'><Link to={`/event/${id}/about`}>Détails</Link></button>}

          </div>
          <div className='event__detail__down__moreinfo'>
            <Link to={`/event/${id}/about`}>
              <p className='event__detail__down__moreinfo__text'>Plus d'informations en détails</p>
            </Link>

          </div>
        </div>
      </div>
    </div >


  );
}

// == Export
export default Event;



