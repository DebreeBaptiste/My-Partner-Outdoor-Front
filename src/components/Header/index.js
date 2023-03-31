/* Tool */
import { useState } from 'react';

/* Component */
import logo from 'src/assets/Mountain-adventure.png';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button'


/* Style */
import './styles.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickBurgerButton = () => {
    setMenuOpen((prevState) => !prevState);
  };


  return (<>



    <div className={`header-menu ${menuOpen ? 'active' : ""}`} >
      <ul className="header-menu-list">
        <li className="header-menu-list-item">
          <Link to='/home' onClick={handleClickBurgerButton}>Evenement</Link>
        </li>
        <li className="header-menu-list-item">
          <Link to='/login' onClick={handleClickBurgerButton}>Connexion</Link>
        </li>
        <li className="header-menu-list-item">
          <Link to='/register' onClick={handleClickBurgerButton}>Inscription</Link>
        </li>
      </ul>
    </div>
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
        <Button className="header-burger-button" onClick={handleClickBurgerButton}>
          <span className={`header-burger-button-line-top ${menuOpen ? 'active' : ""}`} />
          <span className={`header-burger-button-line-mid ${menuOpen ? 'active' : ""}`} />
          <span className={`header-burger-button-line-bottom ${menuOpen ? 'active' : ""}`} />
        </Button>
        <Button className='header-button btn-transparent'>

          <Link to='/login'>Connexion</Link>
        </Button>
        <Button className='header-button btn-grey'>

          <Link to='/register'>Inscription</Link>
        </Button>
      </div>
    </header>
  </>
  );
}


