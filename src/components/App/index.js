/* Tools */
import { Route, Routes } from 'react-router-dom';

/* Component */
import { Header } from '../Header';
import { NotFound } from '../../pages/NotFound';
import { Landing } from '../../pages/Landing';
import { EventPage } from '../../pages/EventPage';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CreateEvent from '../../pages/CreateEvent';

/* Style */
import './styles.css';
import ForgetPassword from '../ForgetPassword';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:id/chat" element={<EventPage />} />
        <Route path="/event/:id/participants" element={<EventPage />} />
        <Route path="/event/:id/" element={<EventPage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
