/* Tools */

/* Component */
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Landing } from '../../pages/Landing';
/* Tools */

/* Component */
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Landing } from '../../pages/Landing';
import { NotFound } from '../../pages/NotFound';

/* Style */
import Home from '../../pages/Home';

/* Style */
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1>Composant : App</h1>
      <Home />


    </div>
  );
}

// == Export
export default App;
