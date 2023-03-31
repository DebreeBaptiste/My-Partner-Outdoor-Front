// == Import
import kayak from 'src/assets/resource/kayak.jpeg';
import iconlocationpin from 'src/assets/resource/icon-location-pin.svg';
import iconusercouple from 'src/assets/resource/icon-user-couple.svg';
import './styles.scss';

// == Composant
function Event() {
  return (
        <div className='event'> 
          <img className='event__image' src={kayak} alt='event' />
          <div className='event__detail'>
            <div className='event__detail__up'>
              <h5 className='event__detail__up__title'>Kayak dans le verdon</h5>
                <div className='event__detail__up__info'>
                  <div className='event__detail__up__info__place' >
                    <img src={iconlocationpin} className='event__detail__up__info__place__picto'></img>
                    <p className='event__detail__up__info__place__text'>Lac du Salagou, 35070 Salga</p>
                  </div>
                  <div className='event__detail__up__info__participants'>
                    <img src={iconusercouple} className='event__detail__up__info__participants__picto'></img>
                    <p className='event__detail__up__info__place__text'>15 participants maximum</p>
                    
                  </div>
                </div>
            </div>

            <div className='event__detail__down'>
              <div className='event__detail__down__priceButton'>
                <div className='event__detail__down__priceButton__price'>
                  <p className='event__detail__down__priceButton__price__number'>10€</p>
                  <p className='event__detail__down__priceButton__price__text'>par personne</p>

                </div>
                <button className='event__detail__down__priceButton__button'>Inscription</button>
              </div>
              <div className='event__detail__down__moreinfo'>
              <a className='event__detail__down__moreinfo__text'>Plus d'informations en détails</a>
              </div>
           </div>
        </div>
      </div>
    
  );
}

// == Export
export default Event;
