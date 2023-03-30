// == Import
import kayak from 'src/assets/resource/kayak.jpeg';
import './styles.scss';

// == Composant
function Event() {
  return (
    <div className='event'>
      <img className='event__image' src={kayak} alt='event' />
      <div className='event__detail'>
        <div>
          <h5>Kayak dans le verdon</h5>
          <div>
            <div>
              <img></img>
              <p>Lac du Salagou, 35070 Salga</p>
            </div>
            <div>
              <img></img>
              <p>15 participants maximum</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

// == Export
export default Event;

