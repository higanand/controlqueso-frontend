// src/KitchenView.js (Versión con Simulación de Ventas)
import React, { useState, useEffect } from 'react';
import './KitchenView.css';

const API_URL = 'http://localhost:8080';

function KitchenView() {
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/shift/status`)
      .then(res => res.json())
      .then(data => {
        setIsShiftActive(data.isShiftActive);
        setIsLoading(false);
      })
      .catch(err => {
        alert("ERROR: No se pudo conectar con el servidor.");
        setIsLoading(false);
      });
  }, []);

  const handleMainButtonClick = async () => {
    try {
      let url;
      let options = { method: 'POST', headers: { 'Content-Type': 'application/json' } };

      if (isShiftActive) {
        const leftoverWeightStr = prompt("CIERRE DE TURNO:\n\nIntroduce el peso del queso SOBRANTE (en gramos):", "100");
        if (leftoverWeightStr === null) return;
        const weight = parseFloat(leftoverWeightStr);
        if (isNaN(weight) || weight < 0) {
          alert("Introduce un número válido.");
          return;
        }

        // --- SIMULACIÓN DE VENTAS DEL TPV ---
        const simulatedSales = {
          mediana: 10,
          familiar: 5,
        };

        url = `${API_URL}/api/shift/close`;
        options.body = JSON.stringify({ leftoverWeight: weight, sales: simulatedSales });
      } else {
        url = `${API_URL}/api/shift/start`;
      }
      
      const response = await fetch(url, options);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      alert(data.message);
      
      const statusResponse = await fetch(`${API_URL}/api/shift/status`);
      const statusData = await statusResponse.json();
      setIsShiftActive(statusData.isShiftActive);
    } catch (error) {
      alert(`ERROR: ${error.message}`);
    }
  };

  const handleWasteButtonClick = () => {
    const grams = prompt("REGISTRO DE DESPERDICIO:\n\n¿Cuántos gramos (aproximado)?", "50");
    if (grams) {
      alert(`Desperdicio registrado: ${grams} gramos.`);
    }
  };
  
  if (isLoading) {
    return <div className="loading-screen"><h1>Cargando estado del turno...</h1></div>;
  }

  return (
    <div className="kitchen-container">
      <div className="main-controls">
        <button className="main-button" onClick={handleMainButtonClick}>
          {isShiftActive ? 'Pesar Sobrante y CERRAR TURNO' : 'Abrir Bolsa e INICIAR TURNO'}
        </button>
      </div>
      <div className="secondary-controls">
        <button className="waste-button" onClick={handleWasteButtonClick} disabled={!isShiftActive}>
          Registrar Desperdicio
        </button>
      </div>
    </div>
  );
}

export default KitchenView;