/* Tools */
import { Route, Routes } from 'react-router-dom';

/* Component */
import { Header } from '../Header';
import { NotFound } from '../../pages/NotFound';
import { Landing } from '../../pages/Landing';
import { EventPage } from '../../pages/EventPage';
import Footer from '../Footer';
import { Home } from '../../pages/Home';
import CreateEvent from '../../pages/CreateEvent';
import ForgetPassword from '../ForgetPassword';
import { ModalLogin } from '../ModalLogin';
import { Register } from '../../pages/Register';
import { Notification } from '../Notification';
import { MyProfil } from '../../pages/MyProfil';
import { Profil } from '../../pages/Profil';
import { Team } from '../../pages/Team';

/* Style */
import './styles.scss';

// == Composant
function App() {

  return (
    <div className="app">
      <Notification />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:id/messages" element={<EventPage />} />
        <Route path="/event/:id/participants" element={<EventPage />} />
        <Route path="/event/:id/about" element={<EventPage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<MyProfil />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ModalLogin />
    </div>
  );
}

// == Export
export default App;
