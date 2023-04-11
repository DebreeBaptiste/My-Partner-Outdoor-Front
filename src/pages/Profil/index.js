/* Image et logo */
import userPicture from 'src/assets/resource/fake-avatar.png';

/* Style */
import './styles.scss';

export const Profil = () => {
  return (
    <section className="profil">
      <div className='profil-content'>
        <div>
          <img src={userPicture} className='profil-user-picture' />
          <button>Edit</button>
        </div>
        <p className='profil-user-pseudo'>John</p>
        <div>
          <p className='profil-user-age'>28 ans</p>
          <p className='profil-user-ville'>Montpellier</p>
        </div>
        <ul className='profil-user-sport-list'>
          <li className='profil-user-sport-item'>Kayak</li>
          <li className='profil-user-sport-item'>Kitesurf</li>
          <li className='profil-user-sport-item'>Football</li>
          <li className='profil-user-sport-item'>Curling</li>
        </ul>
        <div className='profil-user-description'>
          <h6 className='profil-user-description-title'>Bio</h6>
          <p className='profil-user-description-text'>Je suis un sportif de haut niveau,
            je pratique le kayak depuis 10 ans et je suis champion de France en 2019.
            Je suis également un grand fan de football et de kitesurf.
          </p>
        </div>
      </div>

    </section>
  );
};
