import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// == Import
import './styles.scss';
import { postEvent } from '../../api/event';

import { changeField, resetFormField, setOrganizerId } from '../../store/reducers/createEvent';

import { fetchSports } from '../../api/sports';

// == Composant
function CreateEventForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const event = useSelector((state) => state.createEvent.createEvent);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postEvent(navigate));
  };

  const handleChange = (event) => {

    dispatch(changeField({ value: event.target.value, name: event.target.name }));
  };

  // Reset du formulaire et retour à la page d'accueil sur le bouton annuler
  const handleClickCancel = () => {
    dispatch(resetFormField())
    window.scrollTo({ top: 0 })
    navigate('/home');
  };


  useEffect(() => {
    dispatch(setOrganizerId(parseInt(localStorage.getItem('userId'))));
    dispatch((fetchSports()));
  }, []);


  const sports = useSelector((state) => state.sports.sports);


  return (
    <div className='create-event-container'>
      <h1 className='create-event-title'>Création de votre événement</h1>
      <hr className='create-event-divider'/>
      <form onSubmit={handleSubmit} className='event-form'>
        <fieldset className='event-form-section'>
          <h5 className='event-form-title'>Essentiel</h5>
          <div className='event-form-section-content'>
            <div className='event-form-input-container'>
              <label className='event-form-label'>Nom de l'événement :</label>

              <input className='event-form-input' type="text" id="title" name="title" value={event.title} onChange={handleChange} />

            </div>
            <div className='event-form-input-container'>
              <label className='event-form-label'>Sport :</label>
              <select className='event-form-input' id="sport" name="sport" value={event.sport} onChange={handleChange}>
                <option value=" "></option>
                {sports.map((sport) => (

                  <option key={sport.id} value={sport.name}>{sport.name}</option>

                ))}
              </select>
            </div>
            <div className='event-form-input-container'>
              <label className='event-form-label'>Nombre de participant souhaité :</label>
              <input type='number' className='event-form-input' id="participants" name="nb_participant" value={event.nb_participant} onChange={handleChange} />

            </div>
          </div>
        </fieldset>

        <hr className='create-event-divider'/>

        <fieldset className='event-form-section'>
          <h5 className='event-form-title'>Coordonnées</h5>
          <div className='event-form-section-content'>
            <div className='event-form-address'>
              <div className='event-form-address-content'>
                <div className='event-form-input-container event-form-address-number'>
                  <label className='event-form-label'>Numéro :</label>
                  <input className='event-form-input' type="text" id="number" name="number" value={event.number} onChange={handleChange}></input>
                </div>
                <div className='event-form-input-container event-form-address-street'>
                  <label className='event-form-label'>Rue :</label>
                  <input className='event-form-input' type="text" id="street" name="street" value={event.street} onChange={handleChange}></input>
                </div>
              </div>
              <div className='event-form-address-content'>
                <div className='event-form-input-container'>
                  <label className='event-form-label'>Postal :</label>
                  <input className='event-form-input' type="text" id="postal-code" name="zip_code" value={event.zip_code} onChange={handleChange}></input>
                </div>
                <div className='event-form-input-container'>
                  <label className='event-form-label'>Ville :</label>
                  <input className='event-form-input' type="text" id="city" name="city" value={event.city} onChange={handleChange}></input>
                </div>
              </div>
            </div>
            <div className='event-form-date'>
              
                <div className='event-form-input-container' >
                  <label className='event-form-label'>Heure de début :</label>
                  <input className='event-form-input' type="time" name="start_hour" value={event.start_hour} onChange={handleChange} ></input>
                </div>
               
                  <div className='event-form-input-container' >
                    <label className='event-form-label'>Date de début :</label>
                    <input className='event-form-input' type="date" id="start_date" name="start_date" value={event.start_date} onChange={handleChange} min={event.start_date} />

                  </div>
                
              
              

                <div className='event-form-input-container' >
                  <label className='event-form-label'>Heure de fin :</label>
                  <input className='event-form-input' type="time" name="finish_hour" value={event.finish_hour} onChange={handleChange} ></input>
                </div>
                <div className='event-form-input-container'>
                  <label className='event-form-label'>Date de fin :</label>
                  <input className='event-form-input' type="date" id="end_date" name="finish_date" value={event.finish_date} onChange={handleChange} min={event.finish_date} />
                </div>

              
              <div className='event-form-input-container'>
                <label className='event-form-label'>Prix :</label>

                <input className='event-form-input' type="number" min={0} name="price" value={event.price} onChange={handleChange}>

                </input>
              </div>
            </div>
          </div>

        </fieldset>

        <hr className='create-event-divider'/>

        <fieldset className='event-form-section'>
          <h5 className='event-form-title'>Informations supplémentaires</h5>
          <div className='event-form-section-content'>

          <div className='event-form-input-radio-container'>
            <label className='event-form-label'>Niveau souhaité :</label>
            <div className='event-form-input-radio-content' >
              <div className='event-form__bottom__radio__debutant' >

                <input className='event-form-input' type="radio" name="level" onChange={handleChange} value='Débutant' checked={event.level === "Débutant"}></input>
                <label className='event-form-label-radio'>Débutant</label>
              </div>
              <div className='event-form__bottom__radio__debutant' id="niveau">
                <input className='event-form__input__radio' type="radio" name="level" onChange={handleChange} value='Intermédiaire' checked={event.level === "Intermédiaire"}></input>

                <label className='event-form-label-radio'>Intermédiaire</label>
              </div>
              <div className='event-form__bottom__radio__debutant' id="niveau">
                <input className='event-form__input__radio' type="radio" name="level" onChange={handleChange} value='Confirmé' checked={event.level === "Confirmé"}></input>
                <label className='event-form-label-radio'>Confirmé</label>
              </div>
            </div>
          </div>
            
            <div className='event-form-description' id="niveau">
              <label className='event-form-label'>Description :</label>
              <textarea className='event-form-input-textarea' id="description" name="description" rows="5" cols="40" value={event.description} onChange={handleChange}></textarea>
            </div>
            <div className='event-form-equipement' id="niveau">
              <label className='event-form-label'>Equipements à apporter :</label> 

              <textarea className='event-form-input-textarea' id="materiels" name="equipement" rows="5" cols="40" value={event.equipement} onChange={handleChange}></textarea>
            </div>
            <div className='event-form__button' id="niveau">
              <button onClick={handleClickCancel} className='event-form__button__cancel' type="button" >Annuler</button>
              <button className='event-form__button__confirm' type="submit" >Confirmer</button>

            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

// == Export
export default CreateEventForm;
