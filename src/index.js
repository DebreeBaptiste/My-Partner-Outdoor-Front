// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Composants
import App from 'src/components/App';

// Store
import store from 'src/store';

const rootReactElement = <Provider store={store}>
  <BrowserRouter><App /></BrowserRouter>
</Provider>;

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
