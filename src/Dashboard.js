// src/Dashboard.js (Código Completo y Verificado)
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [shifts, setShifts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/dashboard/shifts')
      .then(res => res.json())
      .then(data => {
        setShifts(data);
        setIsLoading(false);
      })
      .catch(err => {
        alert("No se pudieron cargar los datos del panel.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Cargando datos del panel...</h2>;

  return (
    <div className="dashboard-container">
      <h2>Panel de Control - Últimos Turnos</h2>
      {shifts.length === 0 ? (
        <p>No hay datos de turnos cerrados para mostrar.</p>
      ) : (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Consumo Real (g)</th>
              <th>Consumo Teórico (g)</th>
              <th>Desviación (g)</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map(shift => (
              <tr key={shift.id} className={shift.deviation > 0 ? 'deviation-positive' : 'deviation-negative'}>
                <td>{shift.shiftDate}</td>
                <td>{shift.real}</td>
                <td>{shift.theoretical}</td>
                <td className="deviation-cell">{shift.deviation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Dashboard;