import { Link } from 'react-router-dom';
// == Import
import Logo from '../../assets/resource/logoGreen.png';
import Facebook from '../../assets/resource/facebook.png';
import Instagram from '../../assets/resource/instagram.png';
import Twitter from '../../assets/resource/twitter.png';
import Pinterest from '../../assets/resource/pinterest.png';
import './styles.scss';

// == Composant
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__up'>
        <div className='footer__title'>
          <img className='footer__title__Logo' src={Logo} alt="Logo" />
          <h3 className='footer__title__text'>My Partner Outdoor</h3>

        </div>
        <div className='footer__pages'>
          <Link className='footer__pages__team' to='/team'>L'équipe</Link>
          <Link className='footer__pages__landing' to='/' onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>Présentation</Link>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='footer__link'>
          <p>© Partner, Inc. 2023. We love our users!</p>
        </div>
        <div className='footer__social'>
          <p className='footer__social__title'>Suivez-nous</p>
          <img className='footer__social__logo' src={Instagram} alt="Instagram" />
          <img className='footer__social__logo' src={Pinterest} alt="Pinterest" />
          <img className='footer__social__logo' src={Twitter} alt="Twitter" />
          <img className='footer__social__logo' src={Facebook} alt="Facebook" />

        </div>
      </div>
    </footer>

  );
}

// == Export
export default Footer;
