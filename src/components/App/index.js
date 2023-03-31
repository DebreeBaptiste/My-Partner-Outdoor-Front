/* Tools */

/* Component */
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Landing } from '../../pages/Landing';
import { NotFound } from '../../pages/NotFound';
import Home from '../../pages/Home';

/* Style */
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <h1>Composant : App</h1>
      <Home />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
