/* Tools */
import { Route, Routes } from 'react-router-dom';

/* Component */
import { Header } from '../Header';

import { NotFound } from '../../pages/NotFound';
import { Landing } from '../../pages/Landing';
import Home from '../../pages/Home';
import Footer from '../Footer';

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
