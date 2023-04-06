/* Tool */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/reducers/modal';

/* Component */
import logo from 'src/assets/Mountain-adventure.svg';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button'


/* Style */
import './styles.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch()

  const userLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    setMenuOpen(false);
  }, [userLogged]);

  const handleClickBurgerButton = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleOpenModal = (event) => {
    event.preventDefault();
    dispatch(openModal());
  };

  return (<>

    <div className={`header-menu ${menuOpen ? 'active' : ""}`} >
      <ul className="header-menu-list">
        <li className="header-menu-list-item">
          <Link to='/home' onClick={handleClickBurgerButton}>Evenement</Link>
        </li>
        {!userLogged &&
          <>
            <li className="header-menu-list-item">
              <a className="header-menu-login" onClick={handleOpenModal}>Connexion</a>
            </li>
            <li className="header-menu-list-item">
              <Link to='/register' onClick={handleClickBurgerButton}>Inscription</Link>
            </li>
          </>}

        {userLogged &&
          <>
            <li className="header-menu-list-item">
              <Link to='/profil'>Profil</Link>
            </li>

            <Link to="/logout"> <li className="header-menu-login">Déconnexion</li> </Link>
          </>
        }

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

        {!userLogged &&
          <>
            <Button className='header-button btn-transparent'>

              <a onClick={handleOpenModal}>Connexion</a>
            </Button>
            <Button className='header-button btn-grey'>

              <Link to='/register'>Inscription</Link>
            </Button>
          </>
        }
        {userLogged &&
          <>
            <Button className='header-button btn-transparent'>
              <a >Deconnexion</a>
            </Button>
            <Button className='header-button btn-grey'>

              <Link to='/profil'>Profil</Link>
            </Button>
          </>
        }

      </div>
    </header>
  </>
  );
}


