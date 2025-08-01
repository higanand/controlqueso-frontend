// src/PizzaSettings.js (Versión Personalizada)
import React, { useState } from 'react';
import './PizzaSettings.css';

// Lista de pizzas actualizada según tus especificaciones
const initialPizzas = [
  { id: 'familiar', name: 'Pizza Familiar', cheeseGrams: 220 },
  { id: 'mediana', name: 'Pizza Mediana', cheeseGrams: 130 },
  { id: 'pequena', name: 'Pizza Pequeña', cheeseGrams: 65 },
  { id: 'extra', name: 'Extra de Queso', cheeseGrams: 50 },
];

function PizzaSettings() {
  const [pizzas, setPizzas] = useState(initialPizzas);

  const handleGramsChange = (id, value) => {
    const updatedPizzas = pizzas.map(p => 
      p.id === id ? { ...p, cheeseGrams: parseInt(value, 10) || 0 } : p
    );
    setPizzas(updatedPizzas);
  };

  const handleSave = () => {
    // En un futuro, esto guardaría los datos en Firestore
    console.log("Guardando nuevas porciones:", pizzas);
    alert("Porciones guardadas con éxito (simulación).");
  };

  return (
    <div className="settings-container">
      <h2>Configurar Porciones de Queso</h2>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="pizza-item">
            <span className="pizza-name">{pizza.name}</span>
            <input 
              type="number" 
              value={pizza.cheeseGrams}
              onChange={(e) => handleGramsChange(pizza.id, e.target.value)}
              className="grams-input"
            />
            <span>gramos</span>
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="save-button">Guardar Cambios</button>
    </div>
  );
}

export default PizzaSettings;