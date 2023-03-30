// == Import
import { NotFound } from '../../pages/NotFound';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
      <NotFound />
    </div>
  );
}

// == Export
export default App;
