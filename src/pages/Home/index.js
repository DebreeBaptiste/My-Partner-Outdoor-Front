// == Import
// import { NotFound } from '../../pages/NotFound';
import Logo from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/logoGreen.png';
import Facebook from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/facebook.png';
import Instagram from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/instagram.png';
import Twitter from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/twitter.png';
import Pinterest from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/pinterest.png';
import './styles.css';
import Footer from '../../components/App/Footer';
import Events from '../../components/App/Events';

// == Composant
function Home() {
  return (
    <div className="home">
      <div className='search'>
        <div className='search__title'></div>
        <div className='search__bar'>
          <div className='search__bar__input'></div>
          <div className='search__bar__filter'></div> </div>
      </div>
      <div className='event'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>
      <div className='pagination'></div>
      <Events />
      <Footer />
    </div>
  );
}

// == Export
export default Home;
