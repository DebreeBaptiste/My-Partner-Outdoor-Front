// == Import
import Events from '../components/Events';
import Search from '../components/Search';
import Myevents from '../components/Myevents';


// == Composant
function Home() {
  return (
    <div className="home">
     
      <div className='pagination'></div>
      <Myevents />  
      <Search />  
      <Events />  
    </div>
  );
}

// == Export
export default Home;
