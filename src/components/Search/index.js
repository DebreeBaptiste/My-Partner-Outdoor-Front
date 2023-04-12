// == Import
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import iconflechedroite from 'src/assets/resource/icon-fleche-droite.png';
import { changeSearchField  } from '../../store/reducers/searchEvent';
import { fetchSearchEvents } from '../../api/event';


// == Composant
function Search() {

  const [isActiveSport, setIsActiveSport] = useState(false);

  function handleSelectSport(event) {
    if (event.target.value === 'Sport') {
      setIsActiveSport(false);
    } else {
      setIsActiveSport(true);
    }
    console.log(event.target.value);
  }


  const [isActiveNiveau, setIsActiveNiveau] = useState(false);

  function handleSelectNiveau(event) {
    if (event.target.value === 'Niveau') {
      setIsActiveNiveau(false);
    } else {
      setIsActiveNiveau(true);
    }
    console.log(event.target.value);
  }


  const [isActivePrice, setIsActivePrice] = useState(false);

  function handleSelectPrice(event) {
    if (event.target.value === 'Prix') {
      setIsActivePrice(false);
    } else {
      setIsActivePrice(true);
    }
  }

  // const dispatch = useDispatch();
  // const searchEvent = useSelector((state) => state.event.searchEvent);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   dispatch(fetchSearchEvents());
  // };

  // const handleChange = (event) => {
  //   dispatch(changeSearchField({ value: event.target.value, name: event.target.name }));
  // };

  const [searchSport, setSearchSport] = useState('BasketBall');

  const handleChangeSearchSport = (event) => {
    const newValue = event.target.value;
    setSearchSport(newValue);
  };

  const [searchPlace, setSearchPlace] = useState('75');

  const handleChangeSearchPlace = (event) => {
    const newValue = event.target.value;
    setSearchPlace(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetchSearchEvents(searchSport, searchPlace);
    // console.log(searchSport, searchPlace);
  };

  return (
    <form onSubmit={handleSubmit} className='search'>
      <div className='search__title'>
        <h3 className='search__title__text'>Recherche</h3>
      </div>
        <div className='search__block'>
          <div className='search__block__form'>
            <div className='search__block__form__input__sport'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search__block__form__input__sport__iconsearch"><circle cx="10" cy="10" r="7" className="search__block__form__input__sport__iconsearch__primary" /><path className="search__block__form__input__sport__iconsearch__secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
              <input type='text' onChange={handleChangeSearchSport} value={searchSport} className='search__block__form__input__sport__text' placeholder="Un sport, un événement ? " />
            </div>
            <div className='search__block__form__input__place'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search__block__form__input__place__iconlocationpin"><path className="search__block__form__input__place__iconlocationpin__primary" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path className="search__block__form__input__place__iconlocationpin__secondary" d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z" /></svg>
              <input type='number' onChange={handleChangeSearchPlace} value={searchPlace} className='search__block__form__input__place__text'  placeholder="Saisissez un département" />
            </div>
            <div className='search__block__form__input__submit'>

              <button type='submit' className='search__block__form__input__submit__button'>
                <img src={iconflechedroite} className='search__block__form__input__submit__button__image'></img>
              </button>
            </div>
          </div>
        <div className='search__block__filter'>
          <select onChange={handleSelectSport}  className={`search__block__filter__select ${isActiveSport ? 'search__block__filter__select__active' : ''}`}
          >
            <option value="Sport">Sport</option>
            <option value="Football">Football</option>
            <option value="Escalade">Escalade</option>
            <option value="Kitesurf">Kitesurf</option>
            <option value="Plongée Sous-marine">Plongée Sous-marine</option>
            <option value="Pétanque">Pétanque</option>
            <option value="Handball">Handball</option>
          </select>

          <select onChange={handleSelectNiveau}  className={`search__block__filter__select ${isActiveNiveau ? 'search__block__filter__select__active' : ''}`}>
            <option value="Niveau">Niveau</option>
            <option value="Football">Débutant</option>
            <option value="Escalade">Intermediaire</option>
            <option value="Kitesurf">Confirmé</option>
          </select>


          <select onChange={handleSelectPrice}  className={`search__block__filter__select ${isActivePrice ? 'search__block__filter__select__active' : ''}`}>
            <option value="Prix">Prix</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
          </select>
        
        </div>
      </div>

    </form>
    

  );
  }

// == Export
export default Search;


{/* <button className=' search__block__filter__button'>Niveau</button>
          <div className='search__block__filter__choice hidden'>
              <div className='search__block__filter__choice__sport '>
                <input className='search__block__filter__choice__sport__input' type='checkbox' name='Débutant'></input>
                <label className='search__block__filter__choice__sport__label'>Débutant</label>
              </div>
              <div className='search__block__filter__choice__sport'>
                <input className='search__block__filter__choice__sport__input' type='checkbox' name='Intermediaire'></input>
                <label className='search__block__filter__choice__sport__label'>Intermédiaire</label>
              </div>
              <div className='search__block__filter__choice__sport'>
                <input className='search__block__filter__choice__sport__input' type='checkbox' name='Confirme'></input>
                <label className='search__block__filter__choice__sport__label'>Confirmé</label>
              </div>
            </div>
          </div> */}