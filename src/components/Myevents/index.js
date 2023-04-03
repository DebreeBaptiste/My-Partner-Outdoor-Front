//  Import
import React from 'react';


// == Import
import './styles.scss';
import Event from '../Events/Event';

// == Composant
function Myevents() {
  return (
        <><div class="tabs">
      <a className='tabs__button passé' href="#">Passé</a>
      <a className='tabs__button avenir active' href="#" >À venir</a>
    </div><div className='myevents'>
        <Event />
        <Event />
        <Event />
      </div></>
    
  );
}

// == Export
export default Myevents;

