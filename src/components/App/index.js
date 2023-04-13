/* Tools */
import { Route, Routes, useLocation } from 'react-router-dom';

/* Component */
import { Header } from '../Header';
import { NotFound } from '../../pages/NotFound';
import { Landing } from '../../pages/Landing';
import { EventPage } from '../../pages/EventPage';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CreateEvent from '../../pages/CreateEvent';
import ForgetPassword from '../ForgetPassword';
import { ModalLogin } from '../ModalLogin';
import { Register } from '../../pages/Register';
import { Notification } from '../Notification';
import { Profil } from '../../pages/Profil';

/* Style */
import './styles.scss';
import { useEffect } from 'react';


// == Composant
function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname])

  return (
    <div className="app">
      <Notification />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:id/chat" element={<EventPage />} />
        <Route path="/event/:id/participants" element={<EventPage />} />
        <Route path="/event/:id/" element={<EventPage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ModalLogin />
    </div>
  );
}

// == Export
export default App;
