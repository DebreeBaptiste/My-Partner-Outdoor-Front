// == Import

import './styles.scss';
import iconlocationpin from 'src/assets/resource/icon-location-pin.svg';
import iconsearch from 'src/assets/resource/icon-search.svg';
import iconflechedroite from 'src/assets/resource/icon-fleche-droite.png';


// == Composant
function Search() {
  return (
    <div className='search'>
      <div className='search__title'>
        <h3 className='search__title__text'>Recherche</h3>
      </div>
      <div className='search__block'>
        <div className='search__block__form'>
          <div className='search__block__form__input__sport'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search__block__form__input__sport__iconsearch"><circle cx="10" cy="10" r="7" className="search__block__form__input__sport__iconsearch__primary" /><path className="search__block__form__input__sport__iconsearch__secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
            <input className='search__block__form__input__sport__text' type="text" placeholder="Un sport, un événement ? " />
          </div>
          <div className='search__block__form__input__place'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search__block__form__input__place__iconlocationpin"><path className="search__block__form__input__place__iconlocationpin__primary" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path className="search__block__form__input__place__iconlocationpin__secondary" d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z" /></svg>
            <input className='search__block__form__input__place__text' type="text" placeholder="Saisissez un département" />
          </div>
          <div className='search__block__form__input__submit'>

            <button className='search__block__form__input__submit__button'>
              <img src={iconflechedroite} className='search__block__form__input__submit__button__image'></img>
            </button>
          </div>
        </div>
        <div className='search__block__filter'>
          <button className=' search__block__filter__button'>Sport</button>
          <button className=' search__block__filter__button'>Niveau</button>
          <button className=' search__block__filter__button'>Prix</button>
        </div>
      </div>

    </div>

  );
}

// == Export
export default Search;
