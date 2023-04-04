/* Tools */
import { Route, Routes } from 'react-router-dom';

/* Component */
import { Header } from '../Header';
import { NotFound } from '../../pages/NotFound';
import { Landing } from '../../pages/Landing';
import { EventPage } from '../../pages/EventPage';
import Home from '../../pages/Home';
import Footer from '../Footer';

/* Style */
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:id/chat" element={<EventPage />} />
        <Route path="/event/:id/participants" element={<EventPage />} />
        <Route path="/event/:id/" element={<EventPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
