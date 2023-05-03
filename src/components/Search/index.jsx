// == Import
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import iconflechedroite from '../../assets/resource/icon-fleche-droite.png';
import { fetchSearchEvents } from '../../api/event';
import { getFilteredEvents } from '../../store/reducers/event';

// == Composant
function Search() {

  const [isActiveNiveau, setIsActiveNiveau] = useState(false);

  function handleSelectNiveau(event) {
    if (event.target.value === '') {
      setIsActiveNiveau(false);
    } else {
      setIsActiveNiveau(true);
    }
    console.log(event.target.value);
  }

  const dispatch = useDispatch();

  const [searchSport, setSearchSport] = useState('');

  const handleChangeSearchSport = (event) => {
    const newValue = event.target.value;
    setSearchSport(newValue);
  };


  const [searchPlace, setSearchPlace] = useState('');

  const handleChangeSearchPlace = (event) => {
    const newValue = event.target.value;
    setSearchPlace(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchSearchEvents(searchSport, searchPlace, dispatch);
  };

  function handleSelectChange(event) {
    dispatch(getFilteredEvents(event.target.value)); // Stocker la valeur sélectionnée dans le state global
  }

  function handleChangeAndNiveau(event) {

    handleSelectNiveau(event);
    handleSelectChange(event);
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      
      <h3 className='search-title'>Recherche</h3>
      

      <div className='search-bar'>
        <div className='search-bar-content'>
          <div className='search-bar-content-wrapper'>

            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="search-bar-content-input-icon">
              <circle 
              cx="10" 
              cy="10" 
              r="7" 
              className="search-bar-content-input-icon-primary" />
              <path className="search-bar-content-input-icon-secondary" 
              d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>

            <input 
              type='text' 
              onChange={handleChangeSearchSport} 
              value={searchSport} 
              className='search-bar-content-input' 
              placeholder="Un sport, un événement ? " 
            />
            
          </div>
          <div className='search-bar-content-wrapper'>

            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="search-bar-content-input-icon">
              <path 
              className="search-bar-content-input-icon-primary search-bar-content-input-icon-location" 
              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path 
              className="search-bar-content-input-icon-secondary"
              d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z" />
              </svg>

            <input 
              type='number' 
              onChange={handleChangeSearchPlace} 
              value={searchPlace} 
              className='search-bar-content-input' 
              placeholder="Saisissez un département" 
            />
        
          <div className='search-bar-content-submit'>

            <button type='submit' className='search-bar-content-submit-button'>

              <img 
              src={iconflechedroite} 
              className='search-bar-content-submit-button-image'>
              </img>

            </button>

          </div>
          </div>
          <div className='search-bar-content-filter'>


            <select 
            onChange={handleChangeAndNiveau} 
            className={`search-bar-content-filter-select ${isActiveNiveau ? 'search-bar-content-filter-select-active' : ''}`}>

              <option value="">Niveau</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Confirmé">Confirmé</option>
            </select>

          </div>
        </div>
      </div>
    </form>



  );
};


// == Export
export default Search;

