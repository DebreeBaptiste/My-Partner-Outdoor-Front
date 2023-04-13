//  Import
import { useState } from 'react';

// == Import
import './styles.scss';
import Event from '../Events/Event';

// == Composant
function Myevents() {
const [activeButton, setActiveButton] = useState("upcoming");

const handleUpcomingClick = () => {  
  setActiveButton('upcoming');
}; 

const handlePastClick = () => {  
  setActiveButton('past');
}; 

  return (
    <><div className="myevents__tabs">

      <button onClick={handlePastClick} className={activeButton === 'past' ? 'active' : 'myevents__tabs__button__past'} href="#">Passé</button>
      <button onClick={handleUpcomingClick} className={activeButton === 'upcoming' ? 'active' : 'myevents__tabs__button__upcoming'} href="#" >À venir</button>
    </div><div className='myevents'>
        <Event />
        <Event />
        <Event />
      </div></>

  );
}

// == Export
export default Myevents;

