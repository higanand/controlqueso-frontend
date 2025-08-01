// Este es el único código que debe haber en ManagerView.js

import React, { useState } from 'react';
import './ManagerView.css';
import PizzaSettings from './PizzaSettings';
import Dashboard from './Dashboard';

function ManagerView() {
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('1');

  const handleAddBatch = async (event) => {
    event.preventDefault();
    const numQuantity = parseInt(quantity, 10);
    const numCost = parseFloat(cost);

    if (isNaN(numQuantity) || isNaN(numCost) || numQuantity <= 0 || numCost <= 0) {
      alert("Por favor, introduce una cantidad y un coste válidos.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/batches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: numQuantity, cost: numCost }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error en el servidor');
      alert(data.message);
      setCost('');
      setQuantity('1');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="manager-container">
      <header className="manager-header">
        <h1>Panel del Gerente - ControlQueso</h1>
      </header>
      
      <Dashboard />
      
      <main className="manager-main">
        <div className="form-container">
          <h2>Registrar Nuevo Lote de Queso</h2>
          <form onSubmit={handleAddBatch}>
            <div className="form-group">
              <label htmlFor="quantity">Cantidad de Bolsas (de 3kg)</label>
              <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
            </div>
            <div className="form-group">
              <label htmlFor="cost">Coste por Bolsa (€)</label>
              <input type="number" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} step="0.01" placeholder="Ej: 12.50" required />
            </div>
            <button type="submit" className="submit-button">Añadir Lote al Inventario</button>
          </form>
        </div>
        <div className="list-container">
          <h2>Inventario Actual (Próximamente)</h2>
          <p>Aquí se mostrará la lista de lotes de queso.</p>
        </div>
      </main>

      <PizzaSettings />
    </div>
  );
}

export default ManagerView;