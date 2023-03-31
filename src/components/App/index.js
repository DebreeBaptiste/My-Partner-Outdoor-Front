/* Tools */
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

/* Component */
import { Header } from '../Header';
import { NotFound } from '../../pages/NotFound';
import Footer from '../Footer';
import { Landing } from '../../pages/Landing';
import { EventPage } from '../../pages/EventPage';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CreateEvent from '../../pages/CreateEvent';
import ForgetPassword from '../ForgetPassword';
import { ModalLogin } from '../ModalLogin';

/* Style */
import './styles.css';
import ForgetPassword from '../ForgetPassword';
import './styles.scss';
import { ModalLogin } from '../ModalLogin';

// == Composant
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    setModalOpen(false);
  };


  return (
    <div className="app">
      <Header onClick={handleOpenModal} />
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
      <ModalLogin open={modalOpen} onClick={handleCloseModal} />
    </div>
  );
}

// == Export
export default App;
