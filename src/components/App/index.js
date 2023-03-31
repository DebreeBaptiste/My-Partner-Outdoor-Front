/* Tools */
import React from 'react';

/* Component */
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Landing } from '../../pages/Landing';
import { NotFound } from '../../pages/NotFound';
import Footer from '../Footer';
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
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
