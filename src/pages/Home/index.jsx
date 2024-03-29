// == Import
import { useSelector } from 'react-redux';

// == Composant
import Events from '../../components/Events';
import Search from '../../components/Search';
import Myevents from '../../components/Myevents';

import './styles.scss';


export const Home = () => {

  const userLogged = useSelector((state) => state.user.logged);

  return (
    <div className="home">

      <div className='pagination'></div>
      {userLogged && <Myevents />}
      <Search />
      <Events />
    </div>
  );
}

