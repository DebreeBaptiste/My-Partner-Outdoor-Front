/* Tool */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { openModal } from '../../store/reducers/modalLogin';
import { logout } from '../../api/auth';
import { addErrorMessage } from '../../store/reducers/error';

/* Component */
import logo from '../../assets/Mountain-adventure.svg';
import { Button } from '../Button'


/* Style */
import './styles.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const userLogged = useSelector((state) => state.user.logged);
  const modalOpen = useSelector((state) => state.modalLogin.open);

  useEffect(() => {
    setMenuOpen(false);
  }, [userLogged, pathname,modalOpen]);

  const handleClickBurgerButton = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleOpenModal = (event) => {
    event.preventDefault();
    setMenuOpen(false);
    dispatch(addErrorMessage(''));
    dispatch(openModal());
  };

  const handleClickLogout = () => {
    dispatch(logout(navigate))
  }


  return (<>

    <div className={`header-menu ${menuOpen ? 'menu-open' : ""}`} >
      <ul className="header-menu-list">
        {!userLogged &&
          <>
            <li className="header-menu-list-item">
              <a href='/home' onClick={handleClickBurgerButton}>Evenement</a>
            </li>

            <li className="header-menu-list-item">
              <a className="header-menu-login" onClick={handleOpenModal}>Se connecter</a>
            </li>
            <li className="header-menu-list-item">
              <Link to='/register' onClick={handleClickBurgerButton}>Inscription</Link>
            </li>
          </>}

        {userLogged &&
          <>
            <li className="header-menu-list-item">
              <Link to='/profil' onClick={handleClickBurgerButton}>Profil</Link>
            </li>
            <li className="header-menu-list-item">
              <a href='/home' onClick={handleClickBurgerButton}>Evenement</a>
            </li>
            <li className="header-menu-list-item">
              <Link to='/createevent' onClick={handleClickBurgerButton}>Créer un évênement</Link>
            </li>
            <li className="header-menu-list-item">
              <Link to="" onClick={handleClickLogout}>Se déconnecter</Link>
            </li>
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

        <span className='header-title-text'><Link to='/'>My Partner Outdoor</Link></span>

      </div>

      {userLogged && <Link to='/createevent' className="header-event">Créer un évênement</Link>}

      <a href='/home' className="header-event">Evenement</a>


      <div className='header-button-container'>
        <Button className="header-burger-button" onClick={handleClickBurgerButton}>
          <span className={`header-burger-button-line-top ${menuOpen ? 'menu-open' : ""}`} />
          <span className={`header-burger-button-line-mid ${menuOpen ? 'menu-open' : ""}`} />
          <span className={`header-burger-button-line-bottom ${menuOpen ? 'menu-open' : ""}`} />
        </Button>

        {!userLogged &&
          <>
            <Button className='header-button btn-transparent'>

              <a onClick={handleOpenModal}>Se connecter</a>
            </Button>
            <Button className='header-button btn-grey'>

              <Link to='/register'>Inscription</Link>
            </Button>
          </>
        }
        {userLogged &&
          <>
            <Button className='header-button btn-transparent'>
              <a onClick={handleClickLogout}>Se déconnecter</a>
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


