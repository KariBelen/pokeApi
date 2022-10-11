import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPage from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Pokemones from './views/Pokemones';
import PokemonDetalle from './views/PokemonDetalle';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBarPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:pokemonSelected" element={<PokemonDetalle />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
