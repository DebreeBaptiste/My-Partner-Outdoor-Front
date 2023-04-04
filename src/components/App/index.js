/* Tools */
import React from 'react';

/* Component */
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { NotFound } from '../../pages/NotFound';
import Footer from '../Footer';
import { Landing } from '../../pages/Landing';
import { EventPage } from '../../pages/EventPage';
import Home from '../../pages/Home';
import CreateEvent from '../../pages/CreateEvent';

/* Style */
import './styles.css';
import ForgetPassword from '../ForgetPassword';

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
