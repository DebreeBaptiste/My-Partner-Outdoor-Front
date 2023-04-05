// == Import
import './styles.scss';
import explorer from '../../assets/resource/explorer.jpeg';

// == Composant
function Error404 () {
  return (
    <div className="error">
      <h1 className='error__title'>ERREUR 404</h1>
      <p className='error__text'>Tu t'es perdu ? Clique sur notre logo</p>
      <img className="error__img" src={explorer} alt="explorateur perdu" />
      </div>
  );
}

// == Export
export default Error404 ;
