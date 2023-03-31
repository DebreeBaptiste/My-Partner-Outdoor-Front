
/* Component */
import logo from 'src/assets/Mountain-adventure.png';
import { Link } from 'react-router-dom';
import { HeaderButton } from './HeaderButton'

/* Style */
import './styles.scss';
import { HeaderBurgerButton } from './HeaderBurgerButton';

export const Header = () => {
  return (
    <header className="header">
      <div className='header-content'>
        <h1 className="header-title">
          <Link to='/'>
            <img className="header-logo" src={logo} alt="logo My Partner Outdoor" />
          </Link>
        </h1>
        <span className='header-title-text'>My Partner Outdoor</span>
      </div>
      <Link to='/home' className="header-event">Evenement</Link>
      <div className='header-button-container'>
        <HeaderBurgerButton />
        <HeaderButton className='header-button btn-transparent'>

          <Link to='/login'>Connexion</Link>
        </HeaderButton>
        <HeaderButton className='header-button btn-grey'>

          <Link to='/register'>Inscription</Link>
        </HeaderButton>
      </div>
    </header>
  );
}


