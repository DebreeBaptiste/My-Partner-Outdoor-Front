//  Import
import React from 'react';


// == Import
import './styles.scss';
import Event from '../Events/Event';

// == Composant
function Myevents() {
  return (
    <><div className="tabs">

      <button className='tabs__button passé' href="#">Passé</button>
      <button className='tabs__button avenir active' href="#" >À venir</button>
    </div><div className='myevents'>
        <Event />
        <Event />
        <Event />
      </div></>

  );
}

// == Export
export default Myevents;

