// == Import
import Logo from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/logoGreen.png';
import Facebook from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/facebook.png';
import Instagram from '/Users/Antoine/Documents/my-partner-outdoor-front/public/image/instagram.png';

import './styles.scss';
import Event from '../Event/index';

// == Composant
function Events() {
  return (
    <main className='events'>
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </main>

  );
}

// == Export
export default Events;
