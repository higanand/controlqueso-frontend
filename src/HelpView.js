// src/HelpView.js
import React from 'react';
import './HelpView.css';
import { Link } from 'react-router-dom';

function HelpView() {
  return (
    <div className="help-container">
      <header className="help-header">
        <h1>Guía Rápida de ControlQueso</h1>
      </header>
      
      <div className="tutorial-section">
        <h2>Para el Gerente</h2>
        <p>Tu rol es asegurar que el inventario está al día y analizar los resultados.</p>
        <ul>
          <li><strong>Añadir Inventario:</strong> Usa el formulario "Registrar Nuevo Lote" cada vez que llegue un pedido de queso. Introduce la cantidad de bolsas y el coste por bolsa. El sistema las añadirá al inventario aplicando la regla FIFO.</li>
          <li><strong>Analizar Resultados:</strong> La tabla "Panel de Control" te muestra los últimos turnos. La columna "Desviación" es la más importante:
            <ul>
              <li><span className="text-red">Un número positivo (rojo)</span> significa que se gastó MÁS queso del que se vendió. Investiga qué pasó.</li>
              <li><span className="text-green">Un número negativo (verde)</span> significa que se gastó MENOS queso. ¡Buen trabajo de porcionado!</li>
            </ul>
          </li>
          <li><strong>Ajustar Porciones:</strong> En "Configurar Porciones", puedes ajustar los gramos de queso estándar para cada producto.</li>
        </ul>
      </div>

      <div className="tutorial-section">
        <h2>Para el Personal de Cocina</h2>
        <p>Tu rol es muy simple y se centra en un único botón. Tu objetivo es registrar cada bolsa que abres.</p>
        <ol>
          <li><strong>Al empezar el día/turno:</strong> Pulsa el botón verde gigante que dice <span className="text-bold">"Abrir Bolsa e INICIAR TURNO"</span>. Esto le dice al sistema que has cogido la bolsa más antigua del almacén.</li>
          <li><strong>Si se cae queso al suelo:</strong> Pulsa el botón rojo <span className="text-bold">"Registrar Desperdicio"</span>. No te preocupes por la precisión, una estimación es suficiente.</li>
          <li><strong>Al terminar la bolsa (o el día):</strong> Pulsa el botón principal que ahora dirá <span className="text-bold">"Pesar Sobrante y CERRAR TURNO"</span>.</li>
          <li><strong>Introduce el peso:</strong> Pesa el queso que ha sobrado en el recipiente de día y escribe los gramos en la ventana que aparece. Pulsa "Aceptar".</li>
        </ol>
        <p>¡Y ya está! El sistema se encarga del resto. ¡Gracias por tu colaboración!</p>
      </div>

      <Link to="/" className="back-link">Volver al Inicio</Link>
    </div>
  );
}

export default HelpView;