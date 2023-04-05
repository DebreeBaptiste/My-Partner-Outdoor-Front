// == Import
import './styles.scss';

// == Composant
function CreateEventForm() {
  return (
    <div className='createEvent'>
      <h1 className='title'>Création de votre événement</h1>
      <form className='form'>
        <fieldset className='form__up'>
          <h5 className='form__title'>Essentiel</h5>
          <div className='form__right'>
            <div className='form__labelinput'>
              <label className='form__label'>Nom de l'événement :</label>
              <input className='form__input' type="text" id="event-name" name="event-name"></input>
            </div>
            <div className='form__labelinput'>
              <label className='form__label'>Sport :</label>
              <select className='form__input' id="sport" name="sport">
                <option value=" "></option>
                <option value="football">Football</option>
                <option value="bastball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="volleyball">Volleyball</option>
              </select>
            </div>
            <div className='form__labelinput'>
              <label className='form__label'>Nombre de participant souhaité :</label>
              <select className='form__input' id="participants" name="participants">
                <option value=" "></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className='form__middle'>
          <h5 className='form__title'>Coordonnées</h5>
          <div className='form__right'>
            <div className='form__adress'>
              <div className='form__adress__up'>
                <div className='form__adress__up__number'>
                  <label className='form__label__number'>Numéro :</label>
                  <input className='form__input__number' type="text" id="number" name="number"></input>
                </div>
                <div className='form__adress__up__street'>
                  <label className='form__label__street'>Rue :</label>
                  <input className='form__input__street' type="text" id="street" name="street"></input>
                </div>
              </div>
              <div className='form__adress__bottom'>
                <div className='form__adress__bottom__postal'>
                  <label className='form__label__postal'>Postal :</label>
                  <input className='form__input__postal' type="text" id="postal-code" name="postal-code"></input>
                </div>
                <div className='form__adress__bottom__city'>
                  <label className='form__label__city'>Ville :</label>
                  <input className='form__input__city' type="text" id="city" name="city"></input>
                </div>
              </div>
            </div>
            <div className='form__date'>
              <div className='form__date__up' >
                <label className='form__label'>Date de début :</label>
                <input className='form__input' type="date" name="start-date"  ></input>
              </div>
              <div className='form__date__bottom'>
                <label className='form__label'>Date de fin :</label>
                <input className='form__input' type="date" id="end-date" name="end-date" ></input>
              </div>
              <div className='form__price'>
                <label className='form__label'>Prix :</label>
                <select className='form__input' id="price" name="price">
                  <option value=" "></option>
                  <option value="0">Gratuit</option>
                  <option value="5">5 euros</option>
                  <option value="10">10 euros</option>
                  <option value="20">20 euros</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className='form__bottom'>
          <h5 className='form__title'>Informations supplémentaires</h5>
          <div className='form__right'>
            <label className='form__label'>Niveau souhaité :</label>
            <div className='form__bottom__radio' id="niveau">
              <div className='form__bottom__radio__debutant' id="niveau">
                <input className='form__input__radio' type="radio" id="debutant" name="niveau" value="debutant"></input>
                <label className='form__label__radio'>Débutant</label>
              </div>
              <div className='form__bottom__radio__debutant' id="niveau">
                <input className='form__input__radio' type="radio" id="intermediaire" name="niveau" value="intermediaire"></input>
                <label className='form__label__radio'>Intermédiaire</label>
              </div>
              <div className='form__bottom__radio__debutant' id="niveau">
                <input className='form__input__radio' type="radio" id="confirme" name="niveau" value="confirme"></input>
                <label className='form__label__radio'>Confirmé</label>
              </div>
            </div>
            <div className='form__bottom__photo' id="niveau">
              <label className='form__label'>Photo :</label>
              <label htmlFor="file" className="form__label__file">Changer photo</label>
              <input className='form__input__photo' type="file" accept="image/png, image/jpg, image/gif, image/jpeg" name="photo"></input>
            </div>
            <div className='form__bottom__description' id="niveau">
              <label className='form__label'>Description :</label>
              <textarea className='form__input' id="description" name="description" rows="5" cols="40"></textarea>
            </div>
            <div className='form__bottom__materials' id="niveau">
              <label className='form__label'>Matériels à apporter :</label>
              <textarea className='form__input' id="materiels" name="materiels" rows="5" cols="40"></textarea>
            </div>
            <div className='form__bottom__button' id="niveau">
              <button className='form__bottom__button__confirm' type="submit" value="confirmer">Confirmer</button>
              <button className='form__bottom__button__cancel' type="reset" value="annuler">Annuler</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

// == Export
export default CreateEventForm;
