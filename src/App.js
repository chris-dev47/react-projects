import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Accueil from "./pages/Accueil"
import Projets from "./pages/Projets"
import Contact from "./pages/Contact"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App