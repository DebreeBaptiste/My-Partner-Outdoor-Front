// == Import
import Logo from 'src/assets/resource/logoGreen.png';


import './styles.scss';
import Event from 'src/components/App/Events/Event/index.js';

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
