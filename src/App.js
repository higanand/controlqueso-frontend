// src/App.js (Versión Final con Tutorial)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import KitchenView from './KitchenView';
import ManagerView from './ManagerView';
import HelpView from './HelpView'; // 1. Importar la nueva vista

function HomePage() {
  return (
    <nav className="home-nav">
      <h1>Bienvenido a ControlQueso</h1>
      <Link to="/kitchen" className="nav-link kitchen-link">Vista de Cocina</Link>
      <Link to="/manager" className="nav-link manager-link">Panel del Gerente</Link>
      {/* 2. Añadir el enlace a la ayuda */}
      <Link to="/help" className="nav-link help-link">Tutorial / Ayuda</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kitchen" element={<KitchenView />} />
        <Route path="/manager" element={<ManagerView />} />
        {/* 3. Añadir la nueva ruta */}
        <Route path="/help" element={<HelpView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;