import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonDetail from './pages/PokemonDetail'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link> |<Link to="/pokedex">Pokedex</Link> |
          <Link to="/about">About</Link>
        </nav>

        <div className="pokedex-frame">
          <div className="antenna"></div>
          <div className="arm left"></div>
          <div className="arm right"></div>
          <div className="eye left"></div>
          <div className="eye right"></div>

          <div className="screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokemon/:name" element={<PokemonDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
