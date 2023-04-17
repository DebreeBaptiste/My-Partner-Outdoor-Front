// == Import
import './styles.scss';
import explorer from '../../assets/resource/explorer.jpeg';
import { useNavigate } from 'react-router-dom';

// == Composant
function Error404() {

  const navigate = useNavigate();

  const handleClickImage = () => {
    navigate('/');
  }

  return (
    <div className="error">
      <h1 className='error__title'>ERREUR 404</h1>
      <p className='error__text'>Tu t'es perdu ? Clique sur notre logo</p>
      <img className="error__img" src={explorer} alt="explorateur perdu" onClick={handleClickImage} />
    </div>
  );
}

// == Export
export default Error404;
