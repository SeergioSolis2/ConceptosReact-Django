import React, { useState } from 'react';
import Mensaje from './Mensaje';

const ComponenteMensaje = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(true);

  const toggleMensaje = () => {
    setMostrarMensaje(!mostrarMensaje);
  };

  return (
    <div>
      <button onClick={toggleMensaje}>Mostrar/Ocultar Mensaje</button>
      <Mensaje mostrar={mostrarMensaje} />
    </div>
  );
};

export default ComponenteMensaje;