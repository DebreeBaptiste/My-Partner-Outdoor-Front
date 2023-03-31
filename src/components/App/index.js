/* Tools */
import { Route, Routes } from 'react-router-dom';

/* Component */
import { Header } from '../Header';
import { Landing } from '../../pages/Landing';
import { NotFound } from '../../pages/NotFound';
import Home from '../../pages/Home';

/* Style */
import './styles.css';
import Footer from './Footer';

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
