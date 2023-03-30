// == Import

// Import Image & Style
import Logo from 'src/assets/resource/logoGreen.png';
import Facebook from 'src/assets/resource/facebook.png';
import Instagram from 'src/assets/resource/instagram.png';
import Twitter from 'src/assets/resource/twitter.png';
import Pinterest from 'src/assets/resource/pinterest.png';
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
          <a className='footer__pages__team'>L'équipe</a>
          <a className='footer__pages__landing'>Présentation</a>
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

