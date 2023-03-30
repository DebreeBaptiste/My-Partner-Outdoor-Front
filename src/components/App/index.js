// == Import
import { NotFound } from '../../pages/NotFound';
import Home from '../../pages/Home';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <h1>Composant : App</h1>
      <Home /> 
    </div>
  );
}

// == Export
export default App;
