/* Tools */

/* Component */
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Landing } from '../../pages/Landing';
import { NotFound } from '../../pages/NotFound';
import  Footer  from '../App/Footer';
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
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
