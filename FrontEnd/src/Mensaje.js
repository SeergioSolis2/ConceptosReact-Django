import React from 'react';

const Mensaje = ({ mostrar }) => {
  if (mostrar) {
    return <p style={{ fontFamily: 'Arial', color: 'black',fontSize: '25px', textAlign: 'center' }}>El mensaje se muestra.</p>;
  } else {
    return <p></p>;
  }
};

export default Mensaje;